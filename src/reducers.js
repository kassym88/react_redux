import {createStore} from 'redux';

export const stateDefaultCounter = {
    count: 20
};
export const reducerCounter = (state = stateDefaultCounter, action) => {
    // console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

export const defaultStore = createStore(reducerCounter);