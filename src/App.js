import React from 'react';
import Navbar from "./ui/navbar/navbar";
import SearchForm from "./ui/searchForm/searchForm";
import Products from "./ui/products/products"

const App = () => {
    return (
        <div class="container is-fluid">
            <Navbar />
            <SearchForm />
            <Products />
        </div>
    );
};

export default App;