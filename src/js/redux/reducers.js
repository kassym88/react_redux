import {createStore} from 'redux';

export const stateDefault = {
    count: 20,
    sidebarActive2: false
};
export const reducer = (state = stateDefault, action) => {
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
                sidebarActive2: !state.sidebarActive2
            };
        case 'HIDE_SIDEBAR':
            return {
                sidebarActive2: false
            };
        default:
            return state;
    }
};

// export const mapStateToProps = state => ({
//     count: state.count,
//     sideBarActive2: state.sideBarActive2
// });

export const mapStateToProps = state => {return {...state}};

export const defaultStore = createStore(reducer);