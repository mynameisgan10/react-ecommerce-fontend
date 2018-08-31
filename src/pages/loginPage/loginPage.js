import React from 'react';
import LoginForm from "../../ui/loginForm/loginForm";
import NavBar from "../../ui/navbar/navbar";

const loginPage = () => {
    return (
        <div className="container is-fluid">
            <NavBar />
            <LoginForm />
        </div>
    );
};

export default loginPage;