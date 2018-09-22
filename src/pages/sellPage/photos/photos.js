import React from 'react';
import DropArea from "../../../ui/dropArea/dropArea";
import Styles from "./photos.css";

const Photos = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
            <div className="column is-6">
                <DropArea/>
            </div>
            <div className="column is-6">
                <div
                    className={["box", Styles
                        .imageContainer]
                        .join(" ")}>
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <figure className="image is-square">
                                <img src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <figure className="image is-square">
                                <img src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <figure className="image is-square">
                                <img src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <figure className="image is-square">
                                <img src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Photos;