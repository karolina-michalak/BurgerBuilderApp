import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'



const Layout = props => (
    <ReactAux>
        <Toolbar/>
        <main className={style.Content}>
            {props.children}
        </main>
    </ReactAux>
)

export default Layout