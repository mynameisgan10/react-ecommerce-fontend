import React from 'react';

const Button = (props) => {
    return (
        <div class={props.style}>
            {props.children}
        </div>
    );
};

export default Button;