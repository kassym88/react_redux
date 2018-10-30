import React, {Component} from 'react';
// import {hot} from 'react-hot-loader';//hot-loader do not work with REDUX
import { HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {reducerCounter, stateDefaultCounter} from './reducers';
// import configureStore from './configureStore';
import {defaultStore} from './redux/reducers';
import Header from './Header';
import Sidebar from './Sidebar';
// import Signin from './Signin';
import Layout from './Layout';
// import Counter from './Counter';
import '../css/App.css';

// const store = createStore(reducerCounter);
// const store = configureStore(reducerCounter, stateDefaultCounter);

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarActive: false,
            curNavItemIdx: 0,
            navItems: [
                {
                    to: '/',
                    active: true,
                    label: 'Home'
                },
                {
                    to: '/promochart',
                    active: false,
                    label: 'Promochart'
                }
            ]
        }
    }

    hideSidebar = () => {
        if(this.state.sidebarActive)
            this.setState({
                sidebarActive: false
            });
    };

    showHideSidebar = () => {
        this.setState({
            sidebarActive: !this.state.sidebarActive
        });
    };

    selectNavItem = (navItemIdx) => {
        if(this.state.curNavItemIdx !== navItemIdx)
            this.setState(state => {
                state.navItems[state.curNavItemIdx].active = false;
                state.navItems[navItemIdx].active = true;
                state.curNavItemIdx = navItemIdx;
                return state;
            });
        this.hideSidebar();
    };

    render(){
        return(//<Provider> should always include only ONE child
            <HashRouter hashType="noslash">
                <Provider store={defaultStore}>
                    <div id="App">
                        <Header
                            showHideSidebar={this.showHideSidebar}
                        />
                        <Sidebar
                            hideSidebar = {this.hideSidebar}
                            selectNavItem={this.selectNavItem}
                            sidebarActive={this.state.sidebarActive}
                            navItems={this.state.navItems}
                        />
                        <Layout
                            hideSidebar = {this.hideSidebar}
                        />
                    </div>
                </Provider>
            </HashRouter>
        )
    }
}

// export default hot(module)(App);//hot-loader do not work with REDUX
export default App;