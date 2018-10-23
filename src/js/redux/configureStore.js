import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export default function configureStore(reducer, initialState) {
    const store = createStore(reducer,initialState,applyMiddleware(ReduxThunk));

    if (module.hot) {
        // console.log("in module.hot");
        console.log(reducer);
        module.hot.accept( () => {
            // const nextRootReducer = require('./reducer/index').default;
            const nextRootReducer = reducer;//HZ
            store.replaceReducer(nextRootReducer)
        });
    }
    return store;
}