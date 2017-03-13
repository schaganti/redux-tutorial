import React from 'react';
import {connect} from 'react-redux';

let nextId = 1;

export let TodoInput = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }}></input>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextId++
                });
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
}

TodoInput = connect()(TodoInput);
