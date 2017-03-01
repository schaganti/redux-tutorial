import {
    store
} from './counter';

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);

render();

document.addEventListener('click', (e) => {
    store.dispatch({
        type: 'INCREMENT'
    });
});
