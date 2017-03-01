import {
    store
} from './counter';


import {
    CounterComponent
} from './components/counterComponent';

import ReactDOM from 'react-dom';
import React from 'react';

const render = () => {

        ReactDOM.render( < CounterComponent value = {
                store.getState()
            }
            increment = {
                () => store.dispatch({
                    type: 'INCREMENT'
                })
            }
            decrement = {
                () => store.dispatch({
                    type: 'DECREMENT'
                })
            }
            />, document.getElementById('root'));

        };

        store.subscribe(render);
        render();
