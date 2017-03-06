import React from 'react';

export const TodoInput = ({addTodo}) => {
  let input;
  return(<div>
        <input ref={node => {
            input = node;
        }}></input>
        <button onClick={() => {addTodo(input.value); input.value='';}}>Add Todo</button>
      </div>);
}
