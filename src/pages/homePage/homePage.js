import React, {Component} from 'react';
import SearchForm from "../../ui/searchForm/searchForm";
import Products from "../../ui/products/products"
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

class homePage extends Component {
    componentDidMount() {
        console.log("mounted");
        this
            .props
            .getItems();
    }

    render() {
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div className="columns is-centered">
                    <div className="column is-12">
                        <SearchForm/>
                        <Products selling="selling" items={this.props.currentItems}/>
                    </div>
                </div>

            </Fragment>

        );
    }

};
const mapStateToProps = state => {
    return{
        currentItems: state.item.currentItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(actions.get_items())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);