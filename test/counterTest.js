import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';
import {
    addCounter,
    removeCounter,
    incrementCounter
} from '../client/counter';

describe('Immutable counter test cases', () => {
    it('add counter should return a list with added counter', () => {
        const counterBefore = [];
        const counterAfter = [0];
        deepfreeze(counterBefore);
        expect(addCounter(counterBefore)).to.eql(counterAfter);
    });

    it('remove counter should remove the counter from specified index in the list', () => {
        const counterBefore = [1, 2, 3];
        const counterAfter = [1, 3];
        deepfreeze(counterBefore);
        expect(removeCounter(counterBefore, 1)).to.eql(counterAfter);

    });

    it('increment counter should increment the counter at the specified index in the list', () => {
        const counterBefore = [1, 20, 3];
        const counterAfter = [1, 21, 3];
        deepfreeze(counterBefore);
        expect(incrementCounter(counterBefore, 1)).to.eql(counterAfter);

    });

});
