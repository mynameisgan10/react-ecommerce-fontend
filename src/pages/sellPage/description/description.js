import React, {Component} from 'react';
import * as actions from "../../../store/actions/index";
import {connect} from "react-redux";
import axios from "axios";

class Description extends Component {

    onListItem = () => {
        const formData = new FormData();
        formData.append('title', this.props.title);
        formData.append('brand', this.props.brand);
        formData.append('price', this.props.price);
        formData.append('description', this.props.description);
        formData.append('meetup', this.props.meetup);
        formData.append('condition', this.props.condition);
        formData.append('category_id', this.props.category_id);
        const requestArray = [];
        if (this.props.firstImage.src !== "") {

            const firstRequest = () => {
                return axios(
                    {method: "get", url: this.props.firstImage.src, responseType: 'arraybuffer'}
                )
            }
            requestArray.push(firstRequest());
        }
        if (this.props.secondImage.src) {
            const secondRequest = () => {
                return axios(
                    {method: "get", url: this.props.secondImage.src, responseType: 'arraybuffer'}
                )
            }
            requestArray.push(secondRequest());
        }

        if (this.props.thirdImage.src) {
            const thirdRequest = () => {
                return axios(
                    {method: "get", url: this.props.thirdImage.src, responseType: 'arraybuffer'}
                )
            }
            requestArray.push(thirdRequest());
        }

        if (this.props.fourthImage.src) {
            const fourthRequest = () => {
                return axios(
                    {method: "get", url: this.props.fourthImage.src, responseType: 'arraybuffer'}
                )
            }
            requestArray.push(fourthRequest());
        }

        axios
            .all(requestArray)
            .then(axios.spread((firstImage, secondImage, thirdImage, fourthImage) => {
                if (firstImage) {
                    const file = new File(
                        [firstImage.data],
                        Date.now() + this.props.firstImage.name,
                        {
                            type: this.props.firstImage.type,
                            lastModified: new Date()
                        }
                    );
                    formData.append("images", file);
                }
                if (secondImage) {
                    const file = new File(
                        [secondImage.data],
                        Date.now() + this.props.secondImage.name,
                        {
                            type: this.props.secondImage.type,
                            lastModified: new Date()
                        }
                    );
                    formData.append("images", file);
                }
                if (thirdImage) {
                    const file = new File(
                        [thirdImage.data],
                        Date.now() + this.props.thirdImage.name,
                        {
                            type: this.props.thirdImage.type,
                            lastModified: new Date()
                        }
                    );
                    formData.append("images", file);
                }
                if (fourthImage) {
                    const file = new File(
                        [fourthImage.data],
                        Date.now() + this.props.fourthImage.name,
                        {
                            type: this.props.fourthImage.type,
                            lastModified: new Date()
                        }
                    );
                    formData.append("images", file);
                }
                this
                    .props
                    .listItem(formData)

            }))

        // axios(     {method: 'get', url: this.props.firstImage.src, responseType:
        // 'arraybuffer'} ).then((response) => {     const file = new File(
        // [response.data],         Date.now() + this.props.firstImage.name,         {
        // type: this.props.firstImage.type,             lastModified: new Date() } );
        // formData.append("images", file);     this         .props .listItem(formData)
        // });

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
                        <button className="button is-success" onClick={this.onListItem}>List It Now!</button>
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
        category_id: state.newItem.category_id,
        firstImage: state.newItem.firstImage,
        secondImage: state.newItem.secondImage,
        thirdImage: state.newItem.thirdImage,
        fourthImage: state.newItem.fourthImage
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