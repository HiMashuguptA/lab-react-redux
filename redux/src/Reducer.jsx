export const Reducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        if (state > 0) {
            return state - 1;
        }
    }
    return state;
};