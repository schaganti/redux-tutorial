import assert from 'assert';
import expect from 'expect.js';
import deepfreeze from 'deepfreeze';
import {visibilityFilter} from '../../client/reducer/visibilityFilterReducer'

describe('visibility filter test suite', () => {
    it('the default visibility filter should be  SHOW_ALL', () => {
        const stateAfter = 'SHOW_ALL';
        expect(visibilityFilter(undefined, {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_ALL'
        })).to.eql(stateAfter);
    });

    it('visibility filter should be changed to SHOW_COMPLETED', () => {

        const stateAfter = 'SHOW_COMPLETED';
        expect(visibilityFilter('SHOW_ALL', {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        })).to.eql(stateAfter);
    });
});
