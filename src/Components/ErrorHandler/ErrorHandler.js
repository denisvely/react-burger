import React, {Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import hoc from '../../hoc/hoc';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        debugger;
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            });
            axios.interceptors.reponse.use(res => res, error => {
                this.setState({error: error})
            });
        }
        errorConfirmedHadnler = () => {
            this.setState({error: null})
        }
        render() {
            return (
                <hoc>
                    <Modal show={this.state.error}
                        clicked={this.errorConfirmedHadnler} >
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </hoc>
            );
        }
    }
}

export default ErrorHandler;