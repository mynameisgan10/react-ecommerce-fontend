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
        
    }
    onDrop = (e) => {
        // console.log(e);
        console.log(e.dataTransfer.files)
        e.preventDefault();
    }
    onDragOver = (e) => {
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return (
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
                            multiple
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
        );
    };
}

export default DropArea;