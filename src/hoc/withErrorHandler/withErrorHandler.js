import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ReactAux from '../ReactAux'

const withErrorHandler = WrappedComponent => {
    return (props) => {
        return(
            <ReactAux>
                <Modal show>
                    Sth didn't work!
                </Modal>
                <WrappedComponent {...props}/>
            </ReactAux>
        )
    }
}

export default withErrorHandler