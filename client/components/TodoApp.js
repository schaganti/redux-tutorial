import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';

let nextId = 1;

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
                    <FilterLink filter="SHOW_ALL" activeFilter={this.props.visibilityFilter}>all</FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_ACTIVE" activeFilter={this.props.visibilityFilter}>active</FilterLink>
                    {' '}
                    <FilterLink filter="SHOW_COMPLETED" activeFilter={this.props.visibilityFilter}>completed</FilterLink>
                </p>
                <ul>
                    {this.props.todos.map(todo => <li key={todo.id} onClick={() => {
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

const filteredTodos = () => {
    if (store.getState().visibilityFilter === 'SHOW_ALL') {
        return store.getState().todos;
    }
    if (store.getState().visibilityFilter === 'SHOW_ACTIVE') {
        return store.getState().todos.filter(todo => {
            return todo.completed !== true
        });
    }
    if (store.getState().visibilityFilter === 'SHOW_COMPLETED') {
        return store.getState().todos.filter(todo => {
            return todo.completed === true
        });
    }
    return store.getState().todos;
};

const render = () => {
    ReactDOM.render(
        <TodoApp todos={filteredTodos()} visibilityFilter={store.getState().visibilityFilter}/>, document.getElementById('root'));
};

store.subscribe(render);

render();
