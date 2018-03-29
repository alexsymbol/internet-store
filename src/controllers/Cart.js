import Cart from '../models/cart';
import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
const jwt = require('jsonwebtoken');

@controller('/cart')
export default class TestCtrl extends BaseCtrl {
    @get('')
    async getCart(ctx) {
        var decoded = jwt.decode(ctx.headers.authorization, {complete: true});
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

    @put('/:_id')
    async updateItem(ctx) {
        try {
            await Cart.findByIdAndUpdate(ctx.params._id, {$set: ctx.request.body});
            ctx.ok('UPDATE SUCCSESS');
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

    @post('/paid')
    async result(ctx) {
        try {
            const result = ctx.request.body.result;
            if (result === 'paid') {
                console.log('PAY OK');
                ctx.ok();
            } else {
                // send to Masha that NOT OK
                //
                //
                ctx.status = 501;
            }
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

}
