import React, {Component} from 'react';
import * as actions from "../../../store/actions/index";
import {connect} from "react-redux";

class Description extends Component {

    onListItem = () => {
        //TODO: Convert file from blob to file
        let formData = new FormData();
        formData.append('title', this.props.title);
        formData.append('brand', this.props.brand);
        formData.append('price', this.props.price);
        formData.append('description', this.props.description);
        formData.append('meetup', this.props.meetup);
        formData.append('condition', this.props.condition);
        formData.append('category_id', this.props.category_id);
        this.props.listItem(formData)
    }
    render() {
        
        return (
            <div className="column is-12">

                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            name="title"
                            onInput={(event) => this.props.onInputChanged(event)}
                            value={this.props.title}
                            className="input"
                            type="text"
                            placeholder="Title for your product"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Brand</label>
                    <div className="control">
                        <input
                            name="brand"
                            onInput={(event) => this.props.onInputChanged(event)}
                            value={this.props.brand}
                            className="input"
                            type="text"
                            placeholder="Text input"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input
                            name="price"
                            onInput={(event) => this.props.onInputChanged(event)}
                            value={this.props.price}
                            className="input"
                            type="text"
                            placeholder="Text input"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            name="description"
                            onInput={(event) => this.props.onInputChanged(event)}
                            value={this.props.description}
                            className="textarea"
                            placeholder="Textarea"
                            defaultValue={""}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Meet Up</label>
                    <div className="control">
                        <textarea
                            name="meetup"
                            onInput={(event) => this.props.onInputChanged(event)}
                            value={this.props.meetup}
                            className="textarea"
                            placeholder="Textarea"
                            defaultValue={""}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox"/>
                            I agree to the
                            <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Condition</label>
                    <div className="control">
                        <label className="radio">
                            <input
                                type="radio"
                                name="question"
                                value="New"
                                checked={this.props.condition === "New"
                                    ? true
                                    : false}
                                onClick={() => props.onSelectItemCondition("New")}/>
                            New
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="question"
                                value="Used"
                                checked={this.props.condition === "Used"
                                    ? true
                                    : false}
                                onClick={() => props.onSelectItemCondition("Used")}/>
                            Used
                        </label>
                    </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button
                            className="button is-success"
                            onClick={this.onListItem}>List It Now!</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        title: state.newItem.title,
        brand: state.newItem.brand,
        price: state.newItem.price,
        description: state.newItem.description,
        meetup: state.newItem.meetup,
        condition: state.newItem.condition,
        category_id: state.newItem.category_id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInputChanged: (event) => dispatch(actions.newItemInfoInput(event)),
        onSelectItemCondition: (value) => dispatch(actions.selectItemCondition(value)),
        listItem: (newItem) => {
            dispatch(actions.listNewItem(newItem))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);