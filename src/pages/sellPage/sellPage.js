import React from 'react';
import Styles from "./sellPage.css";

const SellPage = () => {
    return (
        <section className="hero  is-fullheight">
            <h1>Photos</h1>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <div
                                className={["box","has-text-centered", Styles
                                    .dropArea]
                                    .join(" ")}>
                                    <h1 className="has-text-weight-bold">Drag and drop the images here</h1>
                                <a className={["button", "is-primary", "is-fullwidth",Styles.uploadButton].join(" ")}>
                                    <span className="icon">
                                        <i className="fas fa-upload"/>
                                    </span>
                                    <span>Upload</span>
                                </a>
                            </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPage;