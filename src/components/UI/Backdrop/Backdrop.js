import React from 'react';
import style from './Backdrop.module.css'

const Backdrop = props => (
    props.show ? <div className={style.Backdrop}></div> : null
)

export default Backdrop