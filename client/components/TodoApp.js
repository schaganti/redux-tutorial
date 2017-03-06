import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';

let nextId = 1;

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
              <ul>
                {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)
                }
              </ul>
            </div>
        )
    }
});

const render = () => {
    ReactDOM.render(
        <TodoApp todos={store.getState().todos}/>, document.getElementById('root'));
};

store.subscribe(render);

render();
