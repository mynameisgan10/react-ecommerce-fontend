import React from 'react';
import Product from "./product/product";


const Products = (props) => {
    const items = props.items;
    const output = items.map((item,index)=> {
        return (<Product key={item.id} item={item} index={index} selling={props.selling}/>)
    })
    return (
        <div className="columns is-multiline">
            {output}
        </div>
    );
};

export default Products;