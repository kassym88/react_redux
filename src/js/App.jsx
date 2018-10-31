import React from 'react';
import {
    MdHome,
    MdInsertChart,
    MdNfc,
    MdInfoOutline
} from 'react-icons/md';
import { HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {defaultStore} from './redux/reducers';
//Main components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import '../css/App.css';
//Layouts
import Home from './components/layout/Home';
import Promochart from './components/layout/Promochart';
import Counter from './components/layout/Counter';
import Signin from './components/layout/Signin';

// import {createStore} from 'redux';
// import {reducerCounter, stateDefaultCounter} from './reducers';
// import configureStore from './configureStore';

// const store = createStore(reducerCounter);
// const store = configureStore(reducerCounter, stateDefaultCounter);

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showHeader: true,
            showSidebar: true,
            sidebarActive: false,
            curLocationPath: '',
            curNavItemIdx: 0,
            navItems: [
                {
                    to: '/',
                    active: true,
                    label: 'Home',
                    icon: <MdHome size={20}/>,
                    component: Home
                },
                {
                    to: '/promochart',
                    active: false,
                    label: 'Promochart',
                    icon: <MdInsertChart size={20}/>,
                    component: Promochart
                },
                {
                    to: '/counter',
                    active: false,
                    label: 'Counter',
                    icon: <MdNfc size={20}/>,
                    component: Counter
                },
                {
                    to: '/signin',
                    active: false,
                    label: 'Signin',
                    icon: <MdInfoOutline size={20}/>,
                    component: Signin
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
                    state.showHeader = this.state.navItems[navItemIdx].to !== '/signin';
                    state.showSidebar = this.state.navItems[navItemIdx].to !== '/signin';
                    return state;
                });
            else
                this.setState(state => {
                    state.navItems[state.curNavItemIdx].active = false;
                    state.curLocationPath = newPath;
                    state.sidebarActive = false;
                    state.showHeader = false;
                    state.showSidebar = false;
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
                            // showHeader={this.state.showHeader}
                            // showHideSidebar={this.showHideSidebar}
                        />
                        <Sidebar
                            // showSidebar={this.state.showSidebar}
                            // hideSidebar = {this.hideSidebar}
                            // sidebarActive={this.state.sidebarActive}
                            // navItems={this.state.navItems}
                        />
                        <Layout
                            // hideSidebar = {this.hideSidebar}
                            // setLocationCurPath = {this.setLocationCurPath}
                            // navItems={this.state.navItems}
                        />
                    </div>
                </Provider>
            </HashRouter>
        )
    }
}

export default App;