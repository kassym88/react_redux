import {createStore} from 'redux';

export const stateDefaultCounter = {
    count: 20,
    sideBarActive: true
};
export const reducerCounter = (state = stateDefaultCounter, action) => {
    // console.info(action);
    // console.info(state);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'SHOW_HIDE_SIDEBAR':
            return {
                sideBarActive: !state.sideBarActive
            };
        case 'HIDE_SIDEBAR':
            return {
                sideBarActive: false
            };
        default:
            return state;
    }
};

export const mapStateToProps = state => ({
    count: state.count,
    sideBarActive: state.sideBarActive
});

// export const mapStateToProps = state => (state);

export const defaultStore = createStore(reducerCounter);