import React from 'react';
import Photos from "./photos/photos";
import Categories from "./categories/categories";
import Description from "./description/description";
import {Route, Redirect, Link} from "react-router-dom";
import {connect} from 'react-redux';

const SellPage = (props) => {
    const Fragment = React.Fragment;
    let redirect = null;
    if(props.redirect){
        console.log("will redirect")
        redirect = <Redirect to={"/item/" + props.newItemId} />
    }
    return (
        <Fragment>
        {redirect};
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
                        <Link to={props.match.url + "/photos"}>Photos</Link>
                    </li>
                    <li>
                        <Link to={props.match.url + "/categories"}>Categories</Link>
                    </li>
                    {/* <li className="is-active">
                        <a aria-current="page">Description</a>
                    </li> */
                    }
                    <li>
                        <Link to={props.match.url + "/desc"}>Description</Link>
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
                            exact
                            render={() => {
                                return <Redirect to="/sell/photos"/>
                            }}/>
                    </div>
                </div>
            </div>
        </section>
        </ Fragment>
    );
};

const mapStateToProps = state => {
    return {
        redirect: state.newItem.redirect,
        newItemId: state.newItem.newItemId
    }
}

export default connect(mapStateToProps)(SellPage);