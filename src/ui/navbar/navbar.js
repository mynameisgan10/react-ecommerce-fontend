import React from 'react';
import {Link} from 'react-router-dom';

const navbar = (props) => {
    const Fragment = React.Fragment;
    let signUpButton = (
        <p className="control">
            <a className="bd-tw-button button is-medium" onClick={props.signUp}>
                <span>
                    Signup
                </span>
            </a>
        </p>
    )
    let button = (
        <Fragment>
            <a className="button is-primary is-medium" onClick={props.login}>
                <span style={{
                        color: "white"
                    }}>Login</span>
            </a>
        </Fragment>
    )

    if (props.authState) {
        signUpButton = null
        button = (
            <Fragment>
                <a className="button is-primary is-medium">
                    <span
                        style={{
                            color: "white"
                        }}>Logout</span>
                </a>
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
                            {signUpButton}
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

export default navbar;