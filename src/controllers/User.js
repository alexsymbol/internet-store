import User from '../models/user';
import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';

@controller('/test')
export default class TestCtrl extends BaseCtrl {
  @get('')
  async getList(ctx) {
    try {
      const items = await User.find().lean();
      ctx.ok(items);
    } catch (err) {
      ctx.throw(HttpStatus.BAD_REQUEST, err.message);
    }
  }

  @post('')
  async createItem(ctx) {
    try {
      const item = await User.create(ctx.request.body);
      ctx.ok(item);
    } catch (err) {
      ctx.throw(HttpStatus.BAD_REQUEST, err.message);
    }
  }

  @get('/:_id')
  async getItemById(ctx) {
    try {
      const item = await User.findById(ctx.params._id);
      ctx.ok(item);
    } catch (err) {
      ctx.throw(HttpStatus.BAD_REQUEST, err.message);
    }
  }

  @put('/:_id')
  async updateItem(ctx) {
    try {
      await User.findByIdAndUpdate(ctx.params._id, { $set: ctx.request.body });
      ctx.ok('UPDATE SUCCSESS');
    } catch (err) {
      ctx.throw(HttpStatus.BAD_REQUEST, err.message);
    }
  }

  @del('/:_id')
  async deleteItem(ctx) {
    try {
      await User.findByIdAndRemove(ctx.params._id);
      ctx.ok('DELETE SUCCESS');
    } catch (err) {
      ctx.throw(HttpStatus.BAD_REQUEST, err.message);
    }
  }
}
