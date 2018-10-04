import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const Product = (props) => {
    const Fragment = React.Fragment;
    let output = (
        <Fragment>
            <a className="card-footer-item has-text-success">
                <i className="fas fa-check"></i>
            </a>
            <a onClick={() => props.onDeleteItem(props.item.id,props.index)} className="card-footer-item has-text-danger">
                <i className="fas fa-times"></i>
            </a>
        </Fragment>
    );
    if (props.selling) {
        output = (
            <Fragment><a className="card-footer-item has-text-danger">
                <i className="far fa-heart"></i>
            </a>
            <a  className="card-footer-item has-text-info">
                <i className="far fa-bookmark"></i>
            </a>
        </Fragment>
        )
    }
    return (
        <div className="column is-3">
            <div className="card">
                <div className="card-image">
                    <Link to={"/item/" + props.item.id}>
                        <figure className="image is-4by3">
                            <img src={props.item.first_image} alt="Placeholder image"/>
                        </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="content has-text-centered">
                        {props.item.name}
                        {/* <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                    </div>
                </div>
                <footer className="card-footer">
                  {output}
                </footer>
            </div>

        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: (productid,index) => dispatch(actions.deleteItem(productid,index))
    }
}

export default connect(null, mapDispatchToProps)(Product);