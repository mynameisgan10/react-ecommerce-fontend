import React, {Component} from 'react';
import Suggestions from "../../ui/suggestions/suggestions";
import Carousel from "../../ui/carousel/carousel";
import Ad from "../../ui/ad/ad";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

class productPage extends Component {
    componentDidMount() {
        if (this.props.match.params.id) {
            this
                .props
                .getItemById(this.props.match.params.id)
        }
    }
    render() {
        return (

            <div className="columns is-centered">
                <div className="column is-12">
                    <section className="hero is-default is-bold">
                        <Ad/>
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns is-vcentered is-multiline">
                                    <Carousel
                                        items={[
                                            1,
                                            1,
                                            1,
                                            1,
                                            1,
                                            1
                                        ]}/>
                                    <div className="column is-6">
                                        <h1 className="title is-2">
                                            {this.props.item.itemName}
                                        </h1>
                                        <h2 className="subtitle is-4">
                                        {this.props.item.itemDesc}
                                            this is the new iphone X<br/>
                                            It is the biggest leap forward
                                        </h2>
                                        <br/>
                                        <p className="has-text-centered">
                                            <a className="button is-medium is-success">
                                                {"$"+this.props.item.itemPrice}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="column is-6">
                                        <h1 className="title is-2">
                                            {this.props.item.itemName}
                                        </h1>
                                        <h2 className="subtitle is-4">
                                            this is the new iphone X<br/>
                                            It is the biggest leap forward
                                        </h2>
                                        <br/>
                                        <p className="has-text-centered">
                                            <a className="button is-medium is-success">
                                                {"$"+this.props.item.itemPrice}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="column is-6">
                                        <Ad/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Ad/>
                        <div className="has-text-centered">
                            <h1 className="has-text-weight-bold is-size-4">Suggestions</h1>
                        </div>
                        <Suggestions/>
                    </section>
                </div>
            </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        item: state.item.productPageItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItemById: (itemid) => dispatch(actions.getSingleItem(itemid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(productPage);