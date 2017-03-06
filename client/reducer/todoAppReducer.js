import {createStore} from 'redux';
import {todos} from './todoListReducer'
import {todo} from './todoReducer';
import {visibilityFilter} from './visibilityFilterReducer';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
}
export const todoAppReducer = combineReducers({todos: todos, visibilityFilter: visibilityFilter});

export const store = createStore(todoAppReducer);

//TODO this has been added just for test cases so that each test can get a new store. In real application we might just export store.
export const newStore = () => {
    return createStore(todoAppReducer);
}
