import React from "react";
import {createStore} from 'redux';
import {MdHome, MdInfoOutline, MdInsertChart, MdNfc} from "react-icons/md";
import Home from "../components/layout/Home";
import Promochart from "../components/layout/Promochart";
import Counter from "../components/layout/Counter";
import Signin from "../components/layout/Signin";

export const stateDefault = {
    count: 20,
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
export const reducer = (state = stateDefault, action) => {
    // console.info(action);
    // console.info(state);
    switch (action.type) {
        case 'C_INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'C_DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'SHOW_HIDE_SIDEBAR':{
            return {
                ...state,
                sidebarActive: !state.sidebarActive
            };
        }
        case 'HIDE_SIDEBAR':
            return {
                ...state,
                sidebarActive: false
            };
        case 'SET_LOCATION_CUR_PATH':
            const newPath = action.data.newPath;
            const stateModified = {...state};
            if(state.curLocationPath !== newPath){
                stateModified.navItems = [...state.navItems];
                const navItemIdx = state.navItems.findIndex(e => e.to === `/${newPath.split('/')[1]}`);
                stateModified.navItems[stateModified.curNavItemIdx].active = false;
                stateModified.curLocationPath = newPath;
                stateModified.sidebarActive = false;
                if(navItemIdx > -1){
                    stateModified.navItems[navItemIdx].active = true;
                    stateModified.curNavItemIdx = navItemIdx;
                    stateModified.showHeader = state.navItems[navItemIdx].to !== '/signin';
                    stateModified.showSidebar = state.navItems[navItemIdx].to !== '/signin';
                }
                else{
                    stateModified.showHeader = false;
                    stateModified.showSidebar = false;
                }
            }
            return stateModified;
        default:
            return state;
    }
};

export const mapStateToProps = state => {return {...state}};

export const defaultStore = createStore(reducer);