import React, {Component} from 'react';
import Styles from "./dropArea.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";

class DropArea extends Component {

    constructor(props) {
        super(props);
        this.fileUpload = React.createRef();
    }

    uploadChanged = (event) => {
        event.preventDefault();
        console.log(this.fileUpload.current.files);

        const propertyname = this
            .props
            .propertyNames[this.props.currentImage]
        const img = this
            .props
            .imageRef[propertyname]
            .current;

        const {files} = this.fileUpload.current;
        
        const localImageUrl = window
            .URL
            .createObjectURL(files[0]);
        img.src = localImageUrl;
        this
            .props
            .storeImgSrc(localImageUrl, propertyname);
    }
    onDrop = (event) => {
        event.preventDefault()

        const propertyname = this
            .props
            .propertyNames[this.props.currentImage]
        const img = this
            .props
            .imageRef[propertyname]
            .current;
        console.log(this.props.firstImage);
        const {files} = event.dataTransfer;
        const localImageUrl = window
            .URL
            .createObjectURL(files[0]);
        img.src = localImageUrl;
        this
            .props
            .storeImgSrc(localImageUrl, propertyname);
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
        propertyNames: state.newItem.propertyNames,
        firstImage: state.newItem.firstImage,
        secondImage: state.newItem.secondImage,
        thirdImage: state.newItem.thirdImage,
        fourthImage: state.newItem.thirdImage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeImgSrc: (src, imagename) => dispatch(
            actions.storeImageSrc(src, imagename)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropArea);