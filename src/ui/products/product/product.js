import React from 'react';
import {Link} from "react-router-dom";

const Product = (props) => {
    const Fragment = React.Fragment;
    let output = (
        <Fragment>
            <a href="#" className="card-footer-item has-text-success">
                <i className="fas fa-check"></i>
            </a>
            <a href="#" className="card-footer-item has-text-danger">
                <i className="fas fa-times"></i>
            </a>
        </Fragment>
    );
    if (props.selling) {
        output = (
            <Fragment><a href="#" className="card-footer-item has-text-danger">
                <i className="far fa-heart"></i>
            </a>
            <a href="#" className="card-footer-item has-text-info">
                <i className="fas fa-bookmark"></i>
            </a>
        </Fragment>
        )
    }
    return (
        <div className="column is-3">
            <div className="card">
                <div className="card-image">
                    <Link to="/product">
                        <figure className="image is-4by3">
                            <img src="https://picsum.photos/1280/960/?random" alt="Placeholder image"/>
                        </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="content has-text-centered">
                        Lorem ipsum dolor sit amet
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer className="card-footer">
                  {output}
                </footer>
            </div>

        </div>
    );
};

export default Product;