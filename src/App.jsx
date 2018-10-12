import React, {Component} from 'react';
// import {hot} from 'react-hot-loader';//hot-loader do not work with REDUX
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {reducerCounter, stateDefaultCounter} from './reducers';
// import configureStore from './configureStore';
import {defaultStore} from './reducers';
import Counter from './Counter.jsx';
import './App.css';

// const store = createStore(reducerCounter);
// const store = configureStore(reducerCounter, stateDefaultCounter);

class App extends Component{
    render(){
        return(//<Provider> should always include only ONE child
            <Provider store={defaultStore}>
                <div>
                    <div className="App">
                        <h1>Hello123, React WebPack JSX</h1>
                    </div>
                    <div className="Counter">
                        <Counter/>
                    </div>
                </div>
            </Provider>
        )
    }
}

// export default hot(module)(App);//hot-loader do not work with REDUX
export default App;