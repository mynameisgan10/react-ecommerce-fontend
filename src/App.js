import React from 'react';
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import Navbar from "./ui/navbar/navbar";
import LoginFormPopUp from "./ui/loginFormPopup/loginFormPopup";
import Modal from "./utils/modal/modal";
import {Switch, Route} from "react-router-dom";


const App = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
            <Modal />
        <div className="container is-fluid">
        <LoginFormPopUp />
        <Navbar />
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/" component={HomePage} />
        </Switch>
        </div>
        </Fragment>
       
    )
};

export default App;