import React from 'react';
import Product from "./product/product";

const Products = () => {
    const array = [1,1,1,1,1,1,1,1]
    const output = array.map(item => {
        return <Product />
    })
    return (
        <div className="columns is-multiline">
            {output}
        </div>
    );
};

export default Products;