import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



const Layout = props => (
    <ReactAux>
        <Toolbar/>
        <SideDrawer/>
        <main className={style.Content}>
            {props.children}
        </main>
    </ReactAux>
)

export default Layout