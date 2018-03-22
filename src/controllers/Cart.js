import Cart from '../models/cart';
import HttpStatus from 'http-status-codes';
import { controller, get, post, del } from 'koa-dec-router';
import BaseCtrl from './Base';

@controller('/cart')
export default class TestCtrl extends BaseCtrl {
    @get('')
    async getCart(ctx) {
        try {
            const items = await Cart.find().lean();
            ctx.ok(items);
        } catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @post('')
    async createItem(ctx) {
        try {
            const item = await Cart.create(ctx.request.body);
            ctx.ok(item);
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @del('/:_id')
    async deleteItem(ctx) {
        try {
            await Cart.findByIdAndRemove(ctx.params._id);
            ctx.ok('DELETE SUCCESS')
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }
}
