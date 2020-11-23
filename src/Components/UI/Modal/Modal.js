import React, { Component } from 'react';
import ModalStyle from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import hoc from '../../../hoc/hoc'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    render() {
        return (
            <hoc>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </hoc>
        );
    }
}

export default Modal