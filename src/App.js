import  React,{Component} from 'react';
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import Navbar from "./ui/navbar/navbar";
import LoginFormPopUp from "./ui/loginFormPopup/loginFormPopup";
import Modal from "./utils/modal/modal";
import {Switch, Route} from "react-router-dom";


class App extends Component  {
    state = {
        showModal: false
    }
    modalToggle = () => {
        this.setState({showModal: !this.state.showModal});
    }

    render(){
        const Fragment = React.Fragment;
        return (
        <Fragment>
            <Modal show={this.state.showModal} toggleModal={this.modalToggle}/>
        <div className="container is-fluid">
        <LoginFormPopUp />
        {console.log(this.state.showModal)}
        <Navbar />
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/" component={HomePage} />
        </Switch>
        </div>
        </Fragment>
       
    )
}
};

export default App;


