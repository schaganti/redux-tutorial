import React from 'react';

let nextId = 1;
export const TodoInput = ({store}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }}></input>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextId++
                });
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
}
