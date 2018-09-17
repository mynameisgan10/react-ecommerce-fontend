import React from 'react';
import Photos from "./photos/photos";
import Categories from "./categories/categories";
import Description from "./description/description";

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
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Photos</a>
                    </li>
                    <li>
                        <a>Category</a>
                    </li>
                    <li className="is-active">
                        <a aria-current="page">Description</a>
                    </li>
                </ul>
            </nav>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        {/* <Photos /> */}
                        {/* <Categories /> */}
                        <Description />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPage;