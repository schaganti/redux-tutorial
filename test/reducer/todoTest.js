import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';

import {todos} from '../../client/reducer/todo';

describe('todo reducer test suite', () => {
    it('should add a todo item when action type is ADD_TODO', () => {
        const todoItem = {
            id: 0,
            text: 'some text'
        };

        const stateBefore = [];

        const stateAfter = [Object.assign({}, todoItem, {completed: false})];

        const action = {
            type: 'ADD_TODO',
            id: todoItem.id,
            text: todoItem.text
        }
        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(todos(stateBefore, action)).to.eql(stateAfter);
    });

    it('should toggle the completed state of todo item by id', () => {
        const todoListBefore = [
            {
                id: 1,
                text: 'some text',
                completed: false
            }, {
                id: 2,
                text: 'some text',
                completed: true
            }
        ]

        const todoListAfter = [
            {
                id: 1,
                text: 'some text',
                completed: true
            }, {
                id: 2,
                text: 'some text',
                completed: true
            }
        ]
        deepfreeze(todoListBefore);
        expect(todos(todoListBefore, {
            type: 'TOOGLE_TODO',
            id: 1
        })).to.eql(todoListAfter);

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
