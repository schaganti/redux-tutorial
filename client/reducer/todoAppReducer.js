import {
    createStore
} from 'redux';
import {
    combineReducers
} from 'redux';
import {
    todos
} from './todoListReducer'
import {
    todo
} from './todoReducer';
import {
    visibilityFilter
} from './visibilityFilterReducer';

import {
    loadState,
    saveState
} from '../local/localStorage'

import {
    throttle
} from 'lodash';

export const todoAppReducer = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

const persistedState = loadState();
export const store = createStore(todoAppReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//TODO this has been added just for test cases so that each test can get a new store. In real application we might just export store.
export const newStore = () => {
    return createStore(todoAppReducer);
}

store.subscribe(throttle(() => {
    console.log('save called');
    saveState({
        todos: store.getState().todos
    });
}, 1000));
