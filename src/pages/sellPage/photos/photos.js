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
                            <div
                                className={["box", Styles
                                    .itemImage]
                                    .join(" ")}>
                                <h1>Test</h1>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div
                                className={["box", Styles
                                    .itemImage]
                                    .join(" ")}>
                                <h1>Test</h1>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div
                                className={["box", Styles
                                    .itemImage]
                                    .join(" ")}>
                                <h1>Test</h1>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div
                                className={["box", Styles
                                    .itemImage]
                                    .join(" ")}>
                                <h1>Test</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Photos;