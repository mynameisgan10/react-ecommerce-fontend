import React from 'react';
import FormInput from "../formInput/formInput";
import Styles from "./loginFormPopup.css";

const LoginFormPopup = (props) => {
    const styles = ["container", Styles.popup];
    if (props.show) {
        styles.push(Styles.active);
    }
    return (
        <div className={styles.join(" ")}>
            <a className="button is-fullwidth is-info">Login with Facebook</a>
            <FormInput
                label="Email"
                success={false}
                placeholder="Email input"
                leftIcon="fas fa-envelope"
                rightIcon="fas fa-exclamation-triangle"
                message="This email is invalid"/>
            <FormInput
                label="Password"
                success={false}
                placeholder="Please type in a password"
                leftIcon="fas fa-key"
                rightIcon="fas fa-exclamation-triangle"
                message="password too short"/>
            <FormInput
                label="Confirm Password"
                success={false}
                placeholder="Confirm Password"
                leftIcon="fas fa-key"
                rightIcon="fas fa-exclamation-triangle"
                message="password too short"/>
            <a className="button is-fullwidth is-success">Sign Up</a>
        </div>
    );
};

export default LoginFormPopup;