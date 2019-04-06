import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentDidMount(){
        console.log('[Modal did mount]');
    }

    render(){
        return(
            <Aux>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}></Backdrop>
            </Aux>
        );
    }
}

export default Modal;