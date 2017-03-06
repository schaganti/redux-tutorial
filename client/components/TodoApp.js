import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';

let nextId = 1;

const filteredTodos = (todos, filter) => {
    if (filter === 'SHOW_ALL') {
        return todos;
    }
    if (filter === 'SHOW_ACTIVE') {
        return todos.filter(todo => {
            return todo.completed !== true
        });
    }
    if (filter === 'SHOW_COMPLETED') {
        return todos.filter(todo => {
            return todo.completed === true
        });
    }
    return store.getState().todos;
};


const FilterLink = React.createClass({
    render: function() {
        const {filter, children, activeFilter} = this.props;
        if(filter === activeFilter) {
          return (<span>{children}</span>);
        } else {
          return (
              <a href="#" onClick={e => {
                  e.preventDefault();
                  store.dispatch({type: 'SET_VISIBILITY_FILTER', filter})
              }}>{children}</a>
          );
        }
    }
});

const TodoApp = React.createClass({
    render: function() {
        const {todos, visibilityFilter} = this.props;
        const filteredTodoList = filteredTodos(todos, visibilityFilter);
        return (
            <div>
                <input ref={node => {
                    this.input = node;
                }}></input>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextId++
                    });
                    this.input.value = '';
                }}>Add Todo</button>
                <p>
                    <b>Show: </b>
                    <FilterLink filter="SHOW_ALL" activeFilter={visibilityFilter}>all</FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_ACTIVE" activeFilter={visibilityFilter}>active</FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_COMPLETED" activeFilter={visibilityFilter}>completed</FilterLink>
                </p>
                <ul>
                    {filteredTodoList.map(todo => <li key={todo.id} onClick={() => {
                        store.dispatch({type: 'TOGGLE_TODO', id: todo.id});
                    }} style={{
                        textDecoration: todo.completed
                            ? 'line-through'
                            : 'none'
                    }}>{todo.text}</li>)
}
                </ul>

            </div>
        )
    }
});


const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);

render();
