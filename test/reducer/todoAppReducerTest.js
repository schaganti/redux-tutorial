import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';
import {todoAppReducer, newStore} from '../../client/reducer/todoAppReducer'

describe('reducer composition test', () => {

    let store;

    beforeEach(() => {
        store = newStore();
    })

    it('should initialize store', () => {
        expect(store).to.not.eql(undefined);
    });

    it('should add new todo to the store', () => {

        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'first todo',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        store.dispatch({type: 'ADD_TODO', id: 1, text: 'first todo'});

        expect(store.getState()).to.eql(expectedState);

    });

    it('should toggle todo by id in store', () => {

        const expectedState = {
            todos: [
                {
                    id: 1,
                    text: 'first todo',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        store.dispatch({type: 'ADD_TODO', id: 1, text: 'first todo'});

        expect(store.getState()).to.eql(expectedState);

    });

    it('should change the visibilityFilter to SHOW_COMPLETED', () => {

        const expectedState = {
            todos: [],
            visibilityFilter: 'SHOW_COMPLETED'
        };

        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'});

        expect(store.getState()).to.eql(expectedState);

    });

});
