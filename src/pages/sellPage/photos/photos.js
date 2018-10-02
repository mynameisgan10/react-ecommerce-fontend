import React, {Component} from 'react';
import DropArea from "../../../ui/dropArea/dropArea";
import Styles from "./photos.css";
import * as actions from "../../../store/actions/index";
import {connect} from "react-redux";
// TODO: uploading the same images is not possible
class Photos extends Component {
    constructor(props) {
        super(props);
        this.firstImage = React.createRef();
        this.secondImage = React.createRef();
        this.thirdImage = React.createRef();
        this.fourthImage = React.createRef();
    }
    state = {
        imageRef: {}
    }
    componentDidMount() {
        this.setState({
            imageRef: {
                firstImage: this.firstImage,
                secondImage: this.secondImage,
                thirdImage: this.thirdImage,
                fourthImage: this.fourthImage
            }
        })
        // this.props.storeImageRef("firstImage",this.firstImage.current);
        // this.props.storeImageRef("secondImage",this.secondImage.current);
        // this.props.storeImageRef("thirdImage",this.thirdImage.current);
        // this.props.storeImageRef("fourthImage",this.fourthImage.current);
    }
    render() {
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div className="column is-6">
                    <DropArea imageRef={this.state.imageRef}/>
                </div>
                <div className="column is-6">
                    <div
                        className={["box", Styles
                            .imageContainer]
                            .join(" ")}>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img
                                        id="test"
                                        ref={this.firstImage}
                                        src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img
                                        ref={this.secondImage}
                                        src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img
                                        ref={this.thirdImage}
                                        src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img
                                        ref={this.fourthImage}
                                        src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

};

const mapDispatchToProps = dispatch => {
    return {
        storeImageRef: (refName,ref) => dispatch(actions.storeImageElRef(refName,ref))
    }
}

export default connect(null,mapDispatchToProps)(Photos);