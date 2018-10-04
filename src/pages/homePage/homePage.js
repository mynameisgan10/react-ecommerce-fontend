import React, {Component} from 'react';
import SearchForm from "../../ui/searchForm/searchForm";
import Products from "../../ui/products/products"
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

class homePage extends Component {
    componentDidMount() {
        this
            .props
            .getItems();

            //get items to compare whether the user has liked or saved the items;
    }

    render() {

        return (

            <div className="columns is-centered">
                <div className="column is-12">
                    <SearchForm/>
                    <Products selling="selling" items={this.props.currentItems}/>
                </div>
            </div>

        );
    }

};
const mapStateToProps = state => {
    return {currentItems: state.item.currentItems}
}
const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(actions.getItems())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);