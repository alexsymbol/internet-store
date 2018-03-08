const assert = require('chai').assert;
const app = require('../test/appTest');

let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(3,4);

describe('sayHello()', ()=> {
    it('app should return hello', ()=> {
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should retunr type String', ()=> {
        assert.typeOf(sayHelloResult, 'string');
    });
});

describe('addNumbers()', ()=> {
    it('addNumbers should be above 5', ()=> {
        assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', ()=> {
        assert.typeOf(addNumbersResult, 'number');
    });
});