import React from 'react';
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductPage from "./pages/productPage/productPage";
import {Switch, Route} from "react-router-dom";


const App = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/" component={HomePage} />
        </Switch>
       
    )
};

export default App;