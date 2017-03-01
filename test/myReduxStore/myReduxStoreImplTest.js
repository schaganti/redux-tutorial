import assert from 'assert';
import expect from 'expect.js';
import {
    createStore
} from '../../client/myReduxStoreImpl';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

describe('myStore Test suite', function() {

    let store;
    beforeEach(function() {
        store = createStore(reducer);
    });

    it('should return 0 as initial state', function() {
        expect(store.getState()).to.eql(0);
    });

    it('should return 1 when increment action is fired once', function() {
        store.dispatch({
            type: 'INCREMENT'
        });
        expect(store.getState()).to.eql(1);
    });

    it('should return 0 when increment action is fired once followed by decrement action', function() {
        store.dispatch({
            type: 'INCREMENT'
        });
        store.dispatch({
            type: 'DECREMENT'
        });
        expect(store.getState()).to.eql(0);
    });

    it('should notify subscribed listeners with the new state whenever state changes', function() {
        let publishedState = false;
        store.subscribe((state) => {
            publishedState = true;
            expect(publishedState).to.eql(1);
        });
        store.dispatch({
            type: 'INCREMENT'
        });
        expect(publishedState).to.eql(true);
    });

    it('should be able to unsubscribe listeners', function() {
        let publishStateCounter = 0;
        const listener = (state) => {
            publishStateCounter++;
        };

        const unsubscribeHandler = store.subscribe(listener);

        store.dispatch({
            type: 'INCREMENT'
        });

        unsubscribeHandler();

        store.dispatch({
            type: 'INCREMENT'
        });

        expect(publishStateCounter).to.eql(1);
    });
});
