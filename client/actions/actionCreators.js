import {
    v4
} from 'node-uuid'
export const setVisibiityFilter = (filter) =>
    ({
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    });


let nextId = 0;
export const addTodo = (value) =>
    ({
        type: 'ADD_TODO',
        text: value,
        id: v4()
    });


export const toogleTodo = (id) =>
    ({
        type: 'TOGGLE_TODO',
        id: id
    });
