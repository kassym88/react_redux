import React from 'react';
// import {hot} from 'react-hot-loader';//hot-loader do not work with REDUX
import {
    MdHome,
    MdInsertChart
}
    from 'react-icons/md';
import { HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {reducerCounter, stateDefaultCounter} from './reducers';
// import configureStore from './configureStore';
import {defaultStore} from './redux/reducers';
import Header from './Header';
import Sidebar from './Sidebar';
import Layout from './Layout';
import '../css/App.css';
// import Counter from './Counter';
// import Signin from './Signin';

// const store = createStore(reducerCounter);
// const store = configureStore(reducerCounter, stateDefaultCounter);

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarActive: false,
            curLocationPath: '',
            curNavItemIdx: 0,
            navItems: [
                {
                    to: '/',
                    active: true,
                    label: 'Home',
                    icon: <MdHome size={20}/>
                },
                {
                    to: '/promochart',
                    active: false,
                    label: 'Promochart',
                    icon: <MdInsertChart size={20}/>
                }
            ]
        };
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

    setLocationCurPath = (newPath) => {
        if(this.state.curLocationPath !== newPath){
            const navItemIdx = this.state.navItems.findIndex(e => e.to === `/${newPath.split('/')[1]}`);
            if(navItemIdx > -1)
                this.setState(state => {
                    state.navItems[state.curNavItemIdx].active = false;
                    state.navItems[navItemIdx].active = true;
                    state.curNavItemIdx = navItemIdx;
                    state.curLocationPath = newPath;
                    state.sidebarActive = false;
                    return state;
                });
            else
                this.setState(state => {
                    state.navItems[state.curNavItemIdx].active = false;
                    state.curLocationPath = newPath;
                    state.sidebarActive = false;
                    return state;
                });
        }
    };

    componentDidUpdate(prevProps){

    }

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
                            sidebarActive={this.state.sidebarActive}
                            navItems={this.state.navItems}
                        />
                        <Layout
                            hideSidebar = {this.hideSidebar}
                            setLocationCurPath = {this.setLocationCurPath}
                        />
                    </div>
                </Provider>
            </HashRouter>
        )
    }
}

// export default hot(module)(App);//hot-loader do not work with REDUX
export default App;