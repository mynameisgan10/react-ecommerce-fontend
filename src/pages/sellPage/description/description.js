import React from 'react';

const Description = () => {
    const Fragment = React.Fragment;
    return (
        <div className="column is-12">

            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Brand</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea" defaultValue={""}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Meet Up</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea" defaultValue={""}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>
            <div className="field">
            <label className="label">Condition</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="question"/> New
                    </label>
                    <label className="radio">
                        <input type="radio" name="question"/> Used
                    </label>
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-success">List It Now!</button>
                </div>
                <div className="control">
                    <button className="button is-text">Cancel</button>
                </div>
            </div>
        </div>

    );
};

export default Description;