import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';

import {
    todos
} from '../../client/reducer/todo';

describe('todo reducer test suite', () => {
    it('it should add a todo item when action type is ADD_TODO', () => {
        const todoItem = {
            id: 0,
            text: 'some text'
        };

        const stateBefore = [];

        const stateAfter = [Object.assign({}, todoItem, {completed:false})];

        const action = {
            type: 'ADD_TODO',
            id: todoItem.id,
            text: todoItem.text
        }
        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(todos(stateBefore, action)).to.eql(stateAfter);
    });

    it('should return the original state if an unknown action is passed', () => {
        const stateBefore = [];
        const todoItem = {
            id: 0,
            text: 'some text',
            completed: true
        };
        const action = {
            type: 'UNKNOWN',
            id: todoItem.id,
            text: todoItem.text
        };

        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(todos(stateBefore, action)).to.eql(stateBefore);
    });
});
