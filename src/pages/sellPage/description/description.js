import React from 'react';
import * as actions from "../../../store/actions/index";
import {connect} from "react-redux";

const Description = (props) => {
    const Fragment = React.Fragment;
    return (
        <div className="column is-12">

            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input
                        name="title"
                        onInput={(event) => props.onInputChanged(event)}
                        value={props.title}
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
                        onInput={(event) => props.onInputChanged(event)}
                        value={props.brand}
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
                        onInput={(event) => props.onInputChanged(event)}
                        value={props.price}
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
                        onInput={(event) => props.onInputChanged(event)}
                        value={props.description}
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
                        onInput={(event) => props.onInputChanged(event)}
                        value={props.meetup}
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
                        <input type="radio" name="question"/>
                        New
                    </label>
                    <label className="radio">
                        <input type="radio" name="question"/>
                        Used
                    </label>
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-success">List It Now!</button>
                </div>
                <div className="control">
                    <button className="button is-text">Cancel</button>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {title: state.newItem.title,
            brand: state.newItem.brand,
            price: state.newItem.price,
            description: state.newItem.description,
            meetup: state.newItem.meetup}
}
const mapDispatchToProps = dispatch => {
    return {
        onInputChanged: (event) => dispatch(actions.new_item_info_input(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);