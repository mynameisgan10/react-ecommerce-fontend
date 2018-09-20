import  React,{Component} from 'react';
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import ProfilePage from "./pages/profilePage/profilePage";
import SellPage from "./pages/sellPage/sellPage";
import Navbar from "./ui/navbar/navbar";
import LoginFormPopUp from "./ui/loginFormPopup/loginFormPopup";
import Modal from "./utils/modal/modal";
import Styles from "./App.css";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "./store/actions/index";


class App extends Component  {
    state = {
        showModal: false,
        login: false,
        signUp: false
    }
    modalToggle = () => {
        this.setState({showModal: !this.state.showModal});
    }
    onScroll = (e) =>{
        if(this.state.showModal){
            e.preventDefault();
        }
        console.log("scrolling");
    }
    signUpToggle = () => {
        this.setState({
            signUp: !this.state.signUp
        })
    }

    render(){
        const Fragment = React.Fragment;
        const styles = ["container","is-fluid"];
        if(this.state.showModal){
            styles.push(Styles.scrollLock)
        }
        return (
        <Fragment>
            <Modal show={this.props.showModal} toggleModal={this.props.toggleModal}>
            <LoginFormPopUp show={this.props.showModal} onSignUp={this.props.toggleSignup} signUp={this.props.signUp}/>
            </Modal>
        <div className={styles.join(" ")} onWheel={this.onScroll}>
        
        <Navbar login={this.props.toggleModal} signUp={this.modalToggle} authState={this.state.login}/>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/sell" component={SellPage} />
            <Route path="/" component={HomePage} />
        </Switch>
        </div>
        </Fragment>
       
    )
}
};

const mapStateToProps = state => {
    return {
        showModal: state.modal.showModal,
        signUp: state.modal.signUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal()),
        onHideModal: () => dispatch(actions.hideModal()),
        toggleModal: () => dispatch(actions.toggleModal()),
        toggleSignup: () => dispatch(actions.toggleSignup())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));


