import assert from 'assert';
import expect from 'expect.js';
import {
    store
} from '../../client/counter';

describe('counter test suite', function() {
    it('should return 1 when incremented with state 0', function() {
        store.dispatch({
            type: 'INCREMENT'
        });
        expect(store.getState()).to.eql(1);
    });
    it('should return 0 when decremented with state 1', function() {
        store.dispatch({
            type: 'DECREMENT'
        });
        expect(store.getState()).to.eql(0);
    });
    it('should not decrement below 0', function() {
        store.dispatch({
            type: 'DECREMENT'
        });
        expect(store.getState()).to.eql(0);
    });
});
