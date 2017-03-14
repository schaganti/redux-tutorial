import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actionCreators';
let nextId = 1;

export let TodoInput = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }}></input>
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
}

TodoInput = connect()(TodoInput);
