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
                    <li key={category.id} onClick={() => this.props.onSelectCategory(category.id-1)}>
                        <a>{category.name}</a>
                    </li>
                )
            })
        let categoryValue = null;
        if(this.props.selectedCategory || this.props.selectedCategory === 0){
            categoryValue = this.props.categories[this.props.selectedCategory].name;
        }
        return (
            <div className="column is-12 has-text-centered">
                <input className="input" type="text" name="test" value={categoryValue}/>
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
    return {categories: state.newItem.categories,
             selectedCategory: state.newItem.selectedCategory}
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actions.get_item_categories()),
        onSelectCategory: (id) => dispatch(actions.select_item_category(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);