import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import style from './Layout.module.css';



const Layout = props => (
    <ReactAux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </ReactAux>
)

export default Layout