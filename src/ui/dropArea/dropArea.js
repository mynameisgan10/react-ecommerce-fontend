import React, {Component} from 'react';
import Styles from "./dropArea.css";

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
        const img = document.getElementById("test");
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(this.fileUpload.current.files[0]);

    }
    onDrop = (e) => {
        // console.log(e);
        const reader = new FileReader();
        const img = document.getElementById("test");
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(e.dataTransfer.files[0]);
        console.log(e.dataTransfer.files)
        e.preventDefault();
    }
    onDragOver = (e) => {
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <figure className="image is-square">
                    <img id="test" src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
                <div
                    className={["box", "has-text-centered", Styles
                        .dropArea]
                        .join(" ")}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}>
                    {/* <a
                    className={["button", "is-primary", "is-fullwidth", Styles
                        .uploadButton]
                        .join(" ")}>
                    <span className="icon">
                        <i className="fas fa-upload"/>
                    </span>
                    <span>Upload</span>
                </a> */
                    }
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

export default DropArea;