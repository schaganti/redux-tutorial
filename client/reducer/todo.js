export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => {
                return todo(t, action);
            });
        default:
            return state;

    }
}

const todo = (todo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {id: action.id, text: action.text, completed: false}
        case 'TOGGLE_TODO':
            if (action.id != todo.id) {
                return todo
            } else {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        default:
            return todo;
    }
}
