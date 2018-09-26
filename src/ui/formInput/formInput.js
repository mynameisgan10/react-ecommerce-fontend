import React from 'react';

const formInput = (props) => {
    let status = "";
    if (props.success && props.onTouch) {
        status = "is-success"
    }else if(!props.success && props.onTouch){
        status = "is-danger"
    }
    const output = (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control has-icons-left has-icons-right">
                <input
                    className={["input", status].join(" ")}
                    type={props.type}
                    value={props.value}
                    onInput={props.onFormInput}
                    placeholder={props.placeholder}
                    defaultValue="bulma"/>
                <span className="icon is-small is-left">
                    <i className={props.leftIcon}/>
                </span>
                <span className="icon is-small is-right">
                    <i className={props.rightIcon}/>
                </span>
            </div>
            <p className={["help", status].join(" ")}>{props.message}</p>
        </div>
    )

    return output;
};

export default formInput;