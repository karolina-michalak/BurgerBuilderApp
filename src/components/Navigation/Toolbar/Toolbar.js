import React from 'react';
import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = props => (
    <header className={style.Toolbar}>
        <div>MENU</div>
        <div className={style.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar