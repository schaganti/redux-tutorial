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
        id: nextId++
    });


export const toogleTodo = (id) =>
    ({
        type: 'TOGGLE_TODO',
        id: id
    });
