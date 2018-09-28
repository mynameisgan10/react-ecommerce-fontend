import React from 'react';
import Follow from "./follow/follow";

const Follows = (props) => {
    const output = props
        .followings
        .map(following => <Follow/>)
    return (

        <div className="columns is-multiline">
            {output}

        </div>
    );
};

export default Follows;