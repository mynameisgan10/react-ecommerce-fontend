import React from 'react';
import Product from "./product/product";


const Products = (props) => {
    const items = props.items;
    const output = items.map(item => {
        return (<Product key={item.id} item={item} selling={props.selling}/>)
    })
    return (
        <div className="columns is-multiline">
            {output}
        </div>
    );
};

export default Products;