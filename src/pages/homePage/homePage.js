import React from 'react';
import SearchForm from "../../ui/searchForm/searchForm";
import Products from "../../ui/products/products"

const homePage = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
            <div className="columns is-centered">
                <div className="column is-12">
                    <SearchForm/>
                    <Products selling="selling"/>
                </div>
            </div>

        </Fragment>

    );
};

export default homePage;