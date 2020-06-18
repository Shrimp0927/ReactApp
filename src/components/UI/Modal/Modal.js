import React, { Fragment, Component } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop.js';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate() {
        console.log('[modal] componentDidUpdate')
    }

    render () {
        return (
            <Fragment>
                <Backdrop show={this.props.show} click={this.props.clicked} />
                <div 
                className={styles.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;