import React from 'react';
import Photos from "./photos/photos";
import Categories from "./categories/categories";
import Description from "./description/description";
import {Route, Redirect, Link} from "react-router-dom";

const SellPage = ({match}) => {
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
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={match.url + "/photos"}>Photos</Link>
                    </li>
                    <li>
                        <Link to={match.url + "/categories"}>Categories</Link>
                    </li>
                    {/* <li className="is-active">
                        <a aria-current="page">Description</a>
                    </li> */
                    }
                    <li>
                        <Link to={match.url + "/desc"}>Description</Link>
                    </li>
                </ul>
            </nav>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <Route path='/sell/desc' component={Description}/>
                        <Route path='/sell/categories' component={Categories}/>
                        <Route path='/sell/photos' component={Photos}/>
                        <Route
                            path="/sell"
                            exact="exact"
                            render={() => {
                                return <Redirect to="/sell/photos"/>
                            }}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPage;