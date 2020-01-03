
import React from 'react';
import style from './Modal.module.css'

const Modal = props => (
    <div className={style.Modal}>
        {props.children}
    </div>
)

export default Modal