import React, {Component} from 'react';
import * as actions from "../../../store/actions/index";
import {connect} from "react-redux";

class Categories extends Component {

    componentDidMount() {
        this
            .props
            .getCategories();
    }
    render() {
        const list = this
            .props
            .categories
            .map(category => {
                return (
                    <li key={category.id}>
                        <a>{category.name}</a>
                    </li>
                )
            })
        console.log(this.props.categories);
        return (
            <div className="column is-12 has-text-centered">
                <input className="input" type="text" name="test" id="test"/>
                <div className="columns">
                    <div className="column is-6">
                        <aside className="menu has-text-left">
                            <ul className="menu-list">
                                {list}
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-6">
                        <aside className="menu has-text-left">
                            <ul className="menu-list">
                                {list}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {categories: state.newItem.categories}
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actions.get_item_categories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);