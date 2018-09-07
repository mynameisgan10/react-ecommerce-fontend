import React from 'react';
import Styles from "./modal.css";

const Modal = (props) => {
    let styles = [];
    if(props.show){
        styles.push(Styles.modal);
        // styles = [];
    }
    return (
        <div className={styles.join(" ")} onClick={props.toggleModal} onWheel={(e) => e.preventDefault()}>
            {props.children}
        </div>
    );
};

export default Modal;