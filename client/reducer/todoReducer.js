
export const todo = (todo, action) => {
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
