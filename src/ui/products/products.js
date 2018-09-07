import React from 'react';
import Product from "./product/product";


const Products = (props) => {
    const array = [1,1,1,1,1,1,1,1]
    const output = array.map(item => {
        return (<Product selling={props.selling}/>)
    })
    return (
        <div className="columns is-multiline">
            {output}
        </div>
    );
};

export default Products;