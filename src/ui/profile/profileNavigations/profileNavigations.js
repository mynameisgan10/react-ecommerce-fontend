import React from 'react';
import Products from "../../products/products";
import Follows from "../../follows/follows";
// import ProfileNavigations from "./ProfileNavigations.css";

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
                    
                    <Products selling={false} items={[{id:1,name:"test"},{id:2,name:"test"},{id:3,name:"test"},{id:4,name:"test"}]}/>
                    {/* <Follows />
                    <Follows />
                    <Follows /> */}
                    
                    
                </div>
            </div>
        </Fragment>

    );
};

export default ProfileNavigations;