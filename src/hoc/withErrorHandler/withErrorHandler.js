import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ReactAux from '../ReactAux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }
        componentWillMount(){
            this.requestIntreceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req
            })
            this.resIntreceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestIntreceptor)
            axios.interceptors.response.eject(this.resIntreceptor)

        }

        errorHandler = () => {
            this.setState({
                error: null
            })
        }
        render(){
            return(
            <ReactAux>
                <Modal 
                    show={this.state.error}
                    clicked={this.errorHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </ReactAux>
            )
        }
    }
}
export default withErrorHandler