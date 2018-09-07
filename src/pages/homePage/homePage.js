import React from 'react';
import SearchForm from "../../ui/searchForm/searchForm";
import Products from "../../ui/products/products"

const homePage = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
            <SearchForm/>
            <Products selling/>
        </Fragment>

    );
};

export default homePage;