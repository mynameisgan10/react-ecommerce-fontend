import React, {Component} from 'react';
import FormInput from "../formInput/formInput";
import Styles from "./loginFormPopup.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";

class LoginFormPopup extends Component {
    state = {
        username: '',
        password: '',
        confirmpassword: ''
    }

    onUserNameInput = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value})
    }

    onPasswordInput = (event) => {
        this.setState({password: event.target.value})
    }

    onConfirmPasswordInput = (event) => {
        this.setState({confirmpassword: event.target.value})
    }
    onFormSubmit = () => {
        if(this.props.signUp){
            this.props.onSignUp({
                username: this.state.username,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword
            })
        }else{
            this.props.onLogin({
                username: this.state.username,
                password: this.state.password
            })
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
                    label="Confirm Password"
                    type="password"
                    value={this.state.confirmpassword}
                    onFormInput={this.onConfirmPasswordInput}
                    success={false}
                    placeholder="Confirm Password"
                    leftIcon="fas fa-key"
                    rightIcon="fas fa-exclamation-triangle"
                    message="password too short"/>
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
                    label="username"
                    type="text"
                    value={this.state.username}
                    onFormInput={this.onUserNameInput}
                    success={false}
                    placeholder="Email input"
                    leftIcon="fas fa-envelope"
                    rightIcon="fas fa-exclamation-triangle"
                    message="This email is invalid"/>
                <FormInput
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onFormInput={this.onPasswordInput}
                    success={false}
                    placeholder="Please type in a password"
                    leftIcon="fas fa-key"
                    rightIcon="fas fa-exclamation-triangle"
                    message="password too short"/> {cfmPassword}
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
    return {
        signUp: state.modal.signUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(actions.user_login(user)),
        onSignUp: (user) => dispatch(actions.user_signup(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginFormPopup);