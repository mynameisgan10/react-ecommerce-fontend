import React from 'react';
import Styles from "./modal.css";

const Modal = (props) => {
    return (
        <div className={Styles.modal}>
            {props.children}
        </div>
    );
};

export default Modal;