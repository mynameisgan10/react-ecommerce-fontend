import React from 'react';
import FormInput from "../../ui/formInput/formInput";


const LoginForm = () => {
    return (
        <div>
        <FormInput label="Username" success={true} placeholder="Please type in a username" leftIcon="fas fa-user" rightIcon="fas fa-check" message="This user is available"/>
        <FormInput label="Email" success={false} placeholder="Email input" leftIcon="fas fa-envelope" rightIcon="fas fa-exclamation-triangle" message="This email is invalid"/>
        <FormInput label="Password" success={false} placeholder="Please type in a password" leftIcon="fas fa-key" rightIcon="fas fa-exclamation-triangle" message="password too short"/>
        <FormInput label="Confirm Password" success={false} placeholder="Confirm Password" leftIcon="fas fa-key" rightIcon="fas fa-exclamation-triangle" message="password too short"/>
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
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    );
};

export default LoginForm;