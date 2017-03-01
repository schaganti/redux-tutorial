export const createStore = (reducer) => {

    let state = 0;
    let listeners = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener(state);
        });
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
