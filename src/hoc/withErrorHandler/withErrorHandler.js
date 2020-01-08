import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ReactAux from '../ReactAux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        render(){
            return(
            <ReactAux>
                <Modal show>
                    Sth didn't work!
                </Modal>
                <WrappedComponent {...this.props}/>
            </ReactAux>
            )
        }
    }
}
export default withErrorHandler