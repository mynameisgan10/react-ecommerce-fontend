import React, {Component} from 'react';
import Styles from "./modal.css";
import LoginFormPopUp from "../../ui/loginFormPopup/loginFormPopup";

class Modal extends Component {

    render() {
        let styles = [];
        if (this.props.show) {
            styles.push(Styles.modal);
            // styles = [];
        }
        const Fragment = React.Fragment;
        return (

            <div
                className={styles.join(" ")}
                onClick={this.props.toggleModal}
                onWheel={(e) => e.preventDefault()}>
                {this.props.children}
            </div>

        );
    }
};

export default Modal;