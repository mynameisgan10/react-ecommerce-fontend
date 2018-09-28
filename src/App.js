import React, {Component} from 'react';
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import ProfilePage from "./pages/profilePage/profilePage";
import SellPage from "./pages/sellPage/sellPage";
import Navbar from "./ui/navbar/navbar";
import LoginFormPopUp from "./ui/loginFormPopup/loginFormPopup";
import Modal from "./utils/modal/modal";
import Styles from "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "./store/actions/index";

class App extends Component {
    componentDidMount() {
        console.log("app mounted");
        this
            .props
            .tryLogin();
    }

    render() {
        let redirect = null;
        if(this.props.logout){
            redirect = <Redirect to="/" />
        }
        let userProfile = null;
        if(this.props.authenticated){
            userProfile = <Route path="/profile" exact component={ProfilePage}/>
        }
        const Fragment = React.Fragment;
        const styles = ["container", "is-fluid"];
        if (this.props.showModal) {
            styles.push(Styles.scrollLock)
        }
        return (
            <Fragment>
                {redirect}
                <Modal show={this.props.showModal} toggleModal={this.props.toggleModal}>
                    <LoginFormPopUp show={this.props.showModal}/>
                </Modal>
                <div className={styles.join(" ")}>

                    <Navbar login={this.props.toggleModal}/>
                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route path="/item/:id" component={ProductPage}/>
                        {userProfile}
                        <Route path="/profile/:id" component={ProfilePage}/> {/*route protection */}
                        <Route path="/sell" component={SellPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </div>
            </Fragment>

        )
    }
};

const mapStateToProps = state => {
    return {showModal: state.modal.showModal, logout: state.user.logout, authenticated: state.user.authenticated}
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal()),
        onHideModal: () => dispatch(actions.hideModal()),
        toggleModal: () => dispatch(actions.toggleModal()),
        toggleSignup: () => dispatch(actions.toggleSignup()),
        tryLogin: () => dispatch(actions.try_auto_login())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
