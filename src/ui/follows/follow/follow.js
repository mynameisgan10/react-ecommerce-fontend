import React from 'react';
import Styles from "./follow.css";
const Follow = () => {
    return (
        <div className="column is-3">
            <div className="box has-text-centered">
                <figure
                    className={["image", Styles
                        .centerImage]
                        .join(" ")}>
                    <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
                <h1>Test</h1>
            </div>
        </div>
    );
};

export default Follow;