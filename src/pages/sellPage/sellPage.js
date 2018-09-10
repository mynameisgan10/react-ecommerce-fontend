import React from 'react';
import DropArea from "../../ui/dropArea/dropArea";
import Styles from "./sellPage.css";

const SellPage = () => {
    return (
        <section className="hero  is-fullheight">
            <h1>Photos</h1>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <DropArea />
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