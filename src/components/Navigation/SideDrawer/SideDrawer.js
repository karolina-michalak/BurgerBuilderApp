import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux'

const SideDrawer = props => {
    return(
        <ReactAux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={style.SideDrawer}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </ReactAux>
    )
}

export default SideDrawer