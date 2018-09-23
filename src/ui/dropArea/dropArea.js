import React, {Component} from 'react';
import Styles from "./dropArea.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";

class DropArea extends Component {

    // onDragStart = () => {     event.preventDefault()     event.stopPropagation()
    // } onDragEnd = (e) => {     event.preventDefault() }
    constructor(props) {
        super(props);
        this.fileUpload = React.createRef();
    }
    
    uploadChanged = (e) => {
        console.log(this.fileUpload.current.files);
        const reader = new FileReader();
        const propertyname = this.props.propertyNames[this.props.currentImage]
        const img = this.props.imageRef[propertyname].current;
        reader.onload = (function (aImg,storeImage,imagename) {
            return function (e) {
                aImg.src = e.target.result;
                storeImage(e.target.result,imagename);
            };
        })(img,this.props.storeImgSrc,propertyname);
        reader.readAsDataURL(this.fileUpload.current.files[0]);
    }
    onDrop = (e) => {
        e.preventDefault()
        const reader = new FileReader();
        console.log(this.props.imageRef);
        const propertyname = this.props.propertyNames[this.props.currentImage]
        const img = this.props.imageRef[propertyname].current;
        reader.onload = (function (aImg,storeImage,imagename) {
            return function (e) {
                aImg.src = e.target.result;
                storeImage(e.target.result,imagename);
            };
        })(img,this.props.storeImgSrc,propertyname);
        reader.readAsDataURL(e.dataTransfer.files[0]);
        console.log(e.dataTransfer.files)
        e.preventDefault();
        // this.props.onDrop(e);
    }
    onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div
                    className={["box", "has-text-centered", Styles
                        .dropArea]
                        .join(" ")}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}>
                    <div
                        className={["file", "is-primary", Styles
                            .uploadButton]
                            .join(" ")}>

                        <label
                            className="file-label"
                            style={{
                                margin: "0 auto"
                            }}>
                            <input
                                className="file-input"
                                type="file"
                                name="resume"
                                multiple="multiple"
                                ref={this.fileUpload}
                                onChange={this.uploadChanged}/>
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"/>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = state => {
    return {
        currentImage: state.newItem.currentImage,
        propertyNames: state.newItem.propertyNames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeImgSrc: (src,imagename) => dispatch(actions.store_image_src(src,imagename))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropArea);