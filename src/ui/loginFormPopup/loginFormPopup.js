import React from 'react';
import FormInput from "../formInput/formInput";
import Styles from "./loginFormPopup.css";

const LoginFormPopup = (props) => {
    const styles = ["container", Styles.popup];
    let cfmPassword = null;
    if (props.show) {
        styles.push(Styles.active);
    }
    if(props.signUp){
        cfmPassword = (
            <FormInput
                label="Confirm Password"
                success={false}
                placeholder="Confirm Password"
                leftIcon="fas fa-key"
                rightIcon="fas fa-exclamation-triangle"
                message="password too short"/>
        )
    }
    return (
        <div className={styles.join(" ")}>
            <p className="control">
                <a className="button is-fullwidth is-link">
                    <span className="icon is-small">
                        <i className="fab fa-facebook"></i>
                    </span>
                    <span>Login with Facebook</span>
                </a>
            </p>
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
            {cfmPassword}
            <a className="button is-fullwidth is-success">{props.signUp ? "Signup" : "Login"}</a>
            <div
                className="has-text-centered"
                style={{
                    marginTop: "10px"
                }}>
                <h3>
                    {props.signUp ? "Already have an account?" : "Don't have an account?"}<a onClick={props.onSignUp}> {props.signUp ? "Login" : "Signup"}</a>
                </h3>
            </div>
        </div>
    );
};

export default LoginFormPopup;