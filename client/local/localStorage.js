export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState !== null) {
            return JSON.parse(serializedState);
        }
        return undefined;
    } catch (e) {
        console.log('load state error', e)
    }
}

export const saveState = (state) => {
    try {
        if (state !== undefined) {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        }
    } catch (e) {
        console.log('saveState error', e)
    }
}
