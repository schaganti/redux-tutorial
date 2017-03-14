export const setVisibiityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    };
}

let nextId = 0;
export const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        text: value,
        id: nextId++
    };
}

export const toogleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
}
