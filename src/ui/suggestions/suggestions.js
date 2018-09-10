import React from 'react';
import Suggestion from "./suggestion/suggestion";
import Styles from "./suggestions.css";

const Suggestions = () => {
    const array = [1, 1, 1, 1,1,1];
    const output = array.map(() => <Suggestion/>);
    return (
        <div className="hero-body">
            <div className="container">
                <div
                    className="columns is-vcentered is-multiline">
                    {/* <span href="prev" className={Styles.prev}>&#10094;</span> */
                    }
                    {output}
                    {/* <span href="prev" className={Styles.prev}>&#10095;</span> */
                    }
                </div>
            </div>
        </div>
    );
};

export default Suggestions;