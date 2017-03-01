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
