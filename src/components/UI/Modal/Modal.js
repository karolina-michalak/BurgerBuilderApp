
import React, { Component } from 'react';
import style from './Modal.module.css';
import ReactAux from '../../../hoc/ReactAux';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    render(){
        return(    
            <ReactAux>
                <Backdrop show={props.show} clicked={props.modalClosed}/>
                <div 
                    className={style.Modal}
                    style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'}}
                >
                    {props.children}
                </div>
            </ReactAux>
        )
    }
}

export default Modal