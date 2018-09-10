import React from 'react';
import Photos from "./photos/photos";
import Categories from "./categories/categories";

const SellPage = () => {
    return (
        <section className="hero">
            {/* <h1 className="is-size-3">Photos</h1>
            <span className="icon is-large">
                <i className="fas fa-arrow-left"></i>
            </span> */
            }
            <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <a>Photos</a>
                    </li>
                    <li>
                        <a>Category</a>
                    </li>
                    <li>
                        <a>Components</a>
                    </li>
                    <li className="is-active">
                        <a aria-current="page">Breadcrumb</a>
                    </li>
                </ul>
            </nav>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <Photos />
                        {/* <Categories /> */}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPage;