import React from 'react';
import Products from "../../products/products";

const ProfileNavigations = () => {
    const Fragment = React.Fragment;
    return (

        <Fragment>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <a>Listings</a>
                    </li>
                    <li>
                        <a>Followers</a>
                    </li>
                    <li>
                        <a>Following</a>
                    </li>
                    <li>
                        <a>Saved</a>
                    </li>
                </ul>
            </div>
            <div className="columns">
                <div className="column is-12">
                    <Products/>
                </div>
            </div>
        </Fragment>

    );
};

export default ProfileNavigations;