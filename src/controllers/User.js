import User from '../models/user';
import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
const jwt = require('jsonwebtoken');

@controller('/auth')
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
            const user = await User.findOne({username: ctx.request.body.username});
            if (user) {
                return ctx.throw(HttpStatus.PRECONDITION_FAILED, "Please use a unique username");
            }
            const item = await User.create(ctx.request.body);
            ctx.ok(item);
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @post('/login')
    async login(ctx) {

        const user = await User.findOne({username: ctx.request.body.username});

        if (!user) {
            return ctx.throw(HttpStatus.UNAUTHORIZED, "User is not found.");
        }

        console.log('ctx.params.user', ctx.request.body, user);

        if (ctx.request.body.password !== user.password) {
            ctx.status = ctx.status = 401;
            ctx.body = {
                message: "Authentication failed"
            };
            return ctx;
        }

        ctx.status = 200;
        ctx.set('authorization', jwt.sign({ _id: user._id }, 'A very secret key'));
        ctx.body = {
            token: jwt.sign({ _id: user._id }, 'A very secret key'), //Should be the same secret key as the one used is ./jwt.js
            message: "Successfully logged in!"
        };

        ctx.ok(user);

        return ctx;
    }

    @get('/:_id')
    async getItemById(ctx) {
        try {
            const item = await User.findById(ctx.params._id);
            ctx.ok(item);
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @put('/:_id')
    async updateItem(ctx) {
        try {
            const item = await User.findByIdAndUpdate(ctx.params._id, {$set: ctx.request.body});
            ctx.ok('UPDATE SUCCSESS');
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @put('/profilepage/:_id')
    async updateItem(ctx) {
        try {
            const item = await User.findByIdAndUpdate(ctx.params._id, {$set: ctx.request.body});
            ctx.ok('UPDATE SUCCSESS');
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }




    @del('/:_id')
    async deleteItem(ctx) {
        try {
            await User.findByIdAndRemove(ctx.params._id);
            ctx.ok('DELETE SUCCESS')
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }
}
