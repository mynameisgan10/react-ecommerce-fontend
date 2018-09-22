import React,{Component} from 'react';
import DropArea from "../../../ui/dropArea/dropArea";
import Styles from "./photos.css";

class Photos extends Component{
    constructor(props){
        super(props);
        this.firstImage = React.createRef();
        this.secondImage = React.createRef();
        this.thirdImage = React.createRef();
        this.fourthImage = React.createRef();
    }
    state = {
        currentImage: 0,
        propertyNames: ["firstImage","secondImage","thirdImage","fourthImage"],
        imageRef: {}
    }
    componentDidMount(){
        this.setState({
            imageRef: {
                firstImage: this.firstImage,
                secondImage: this.secondImage,
                thirdImage: this.thirdImage,
                fourthImage: this.fourthImage
            }
        })
    }

    nextImage = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }

    render(){
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div className="column is-6">
                    <DropArea imageRef={this.state.imageRef} currentImage={this.state.currentImage} propertyNames={this.state.propertyNames} nextImage={this.nextImage} />
                </div>
                <div className="column is-6">
                    <div
                        className={["box", Styles
                            .imageContainer]
                            .join(" ")}>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img id="test" ref={this.firstImage} src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img ref={this.secondImage} src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img ref={this.thirdImage} src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-6">
                                <figure className="image is-square">
                                    <img ref={this.fourthImage} src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
   
};

export default Photos;