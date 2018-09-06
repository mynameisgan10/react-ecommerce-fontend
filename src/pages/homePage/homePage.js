import React from 'react';
import Navbar from "../../ui/navbar/navbar"
import SearchForm from "../../ui/searchForm/searchForm";
import Products from "../../ui/products/products"


const homePage = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
            <SearchForm />
            <Products />
        </Fragment>
   

    );
};

export default homePage;