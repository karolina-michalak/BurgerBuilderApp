import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



class Layout extends Component {
    render(){
        return(    
            <ReactAux>
                <Toolbar/>
                <SideDrawer/>
                <main className={style.Content}>
                    {this.props.children}
                </main>
            </ReactAux>
        )
    }
}

export default Layout