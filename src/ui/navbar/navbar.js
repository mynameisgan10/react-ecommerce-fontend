import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

const navbar = (props) => {
    const Fragment = React.Fragment;
    // let signUpButton = (
    //     <p className="control">
    //         <a className="bd-tw-button button is-medium" onClick={props.signUp}>
    //             <span>
    //                 Signup
    //             </span>
    //         </a>
    //     </p>
    // )
    let button = (
        <Fragment>

            <a className="button is-info is-medium" onClick={props.login}>
                <span style={{
                        color: "white"
                    }}>Login</span>
            </a>

        </Fragment>
    )

    if (props.authenticated) {
        // signUpButton = null
        button = (
            <Fragment>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="button is-medium is-white navbar-link">
                        <span className="icon has-text-link is-large fa-2x">
                            <i className="far fa-user-circle"></i>
                        </span>
                    </a>
                    <div className="navbar-dropdown is-boxed">
                        <Link className="navbar-item" to="/profile">Profile</Link>
                        <a
                            className="navbar-item"
                            href="https://bulma.io/documentation/modifiers/syntax/">
                            Modifiers
                        </a>
                        <a
                            className="navbar-item"
                            href="https://bulma.io/documentation/columns/basics/">
                            Columns
                        </a>
                        <a
                            className="navbar-item"
                            href="https://bulma.io/documentation/layout/container/">
                            Layout
                        </a>
                        <a className="navbar-item" onClick={props.onLogOut}>
                            Logout
                        </a>
                    </div>
                </div>

            </Fragment>
        )
    }
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                {/* <a  href="https://bulma.io"> */}
                <Link to="/" className="navbar-item"><img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width={112}
                    height={28}/></Link>
                {/* </a> */}
                <div
                    className="navbar-burger burger"
                    data-target="navbarExampleTransparentExample">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link to="/sell" className="button is-medium is-success">
                                    <span>
                                        Sell
                                    </span>
                                </Link>
                            </p>
                            <p className="control">

                                {/* <Link to="/login" style={{color:"white"}}><span>Login</span></Link> */}
                                {button}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {authenticated: state.user.authenticated}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actions.try_logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);