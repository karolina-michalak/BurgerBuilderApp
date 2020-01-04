import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import style from './Logo.module.css'

const Logo = props => (
    <div className={style.Logo} style={{heigt: props.heigt}}>
        <img src={logo} alt="logo"/>
    </div>
)

export default Logo