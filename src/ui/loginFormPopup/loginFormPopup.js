import React, {Component} from 'react';
import FormInput from "../formInput/formInput";
import Styles from "./loginFormPopup.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";

class LoginFormPopup extends Component {
    componentDidMount() {
        console.log("showing form");
    }
    onFormSubmit = () => {
        if (this.props.signUp) {
            this
                .props
                .onSignUp(
                    {username: this.props.username.value, password: this.props.password.value, confirmpassword: this.props.confirmPassword.value}
                )
        } else {
            this
                .props
                .onLogin(
                    {username: this.props.username.value, password: this.props.password.value}
                )
        }
    }

    render() {
        const styles = ["container", Styles.popup];
        let cfmPassword = null;

        if (this.props.show) {
            styles.push(Styles.active);
        }
        if (this.props.signUp) {
            cfmPassword = (
                <FormInput
                    label={this.props.confirmPassword.label}
                    type={this.props.confirmPassword.type}
                    value={this.props.confirmPassword.value}
                    onFormInput={(event) => this.props.onInput("confirmPassword", event.target.value)}
                    success={this.props.confirmPassword.success}
                    onTouch={this.props.confirmPassword.onTouch}
                    placeholder={this.props.confirmPassword.placeHolder}
                    leftIcon="fas fa-key"
                    rightIcon="fas fa-exclamation-triangle"
                    message={this.props.confirmPassword.errorMessage}/>
            )
        }
        return (
            <div className={styles.join(" ")} onClick={(e) => e.stopPropagation()}>
                <p className="control">
                    <a className="button is-fullwidth is-link">
                        <span className="icon is-small">
                            <i className="fab fa-facebook"></i>
                        </span>
                        <span>Login with Facebook</span>
                    </a>
                </p>
                <FormInput
                    label={this.props.username.label}
                    type={this.props.username.type}
                    value={this.props.username.value}
                    onFormInput={(event) => this.props.onInput("username", event.target.value)}
                    success={this.props.username.success}
                    onTouch={this.props.username.onTouch}
                    placeholder={this.props.username.placeHolder}
                    leftIcon="fas fa-envelope"
                    rightIcon="fas fa-exclamation-triangle"
                    message={this.props.username.errorMessage}/>
                <FormInput
                    label={this.props.password.label}
                    type={this.props.password.type}
                    value={this.props.password.value}
                    onFormInput={(event) => this.props.onInput("password", event.target.value)}
                    success={this.props.password.success}
                    onTouch={this.props.password.onTouch}
                    placeholder={this.props.password.placeHolder}
                    leftIcon="fas fa-key"
                    rightIcon="fas fa-exclamation-triangle"
                    message={this.props.password.errorMessage}/> {cfmPassword}
                <a className="button is-fullwidth is-success" onClick={this.onFormSubmit}>{
                        this.props.signUp
                            ? "Signup"
                            : "Login"
                    }</a>
                <div
                    className="has-text-centered"
                    style={{
                        marginTop: "10px"
                    }}>
                    <h3>
                        {
                            this.props.signUp
                                ? "Already have an account?"
                                : "Don't have an account?"
                        }<a onClick={this.props.toggleSignUp}>
                            {
                                this.props.signUp
                                    ? "Login"
                                    : "Signup"
                            }</a>
                    </h3>
                </div>
            </div>
        );
    }
};
const mapStateToProps = state => {
    return {signUp: state.loginForm.signUp, username: state.loginForm.username, password: state.loginForm.password, confirmPassword: state.loginForm.confirmPassword}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(actions.userLogin(user)),
        onSignUp: (user) => dispatch(actions.userSignup(user)),
        onInput: (propertyName, value) => dispatch(
            actions.formInput(propertyName, value)
        ),
        toggleSignUp: () => dispatch(actions.toggleSignup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormPopup);