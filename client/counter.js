import React from 'react';

import {
    createStore
} from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        default:
            return state;
    }
}

export const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);

render();

document.addEventListener('click', (e) => {
  store.dispatch({type:'INCREMENT'});
});
