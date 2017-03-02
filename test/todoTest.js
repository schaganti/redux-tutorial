import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';

import {
    toggleTodo
} from '../client/todo';

describe('toggle todo test suite', function() {
    it('it should toggle completed state of todo item', () => {
        const todoBefore = {
            id: 0,
            text: 'some text',
            completed: false
        }
        const todoAfter = {
            id: 0,
            text: 'some text',
            completed: true
        }
        deepfreeze(todoBefore);
        expect(toggleTodo(todoBefore)).to.eql(todoAfter);
    })
});
