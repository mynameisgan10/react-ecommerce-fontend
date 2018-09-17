import React from 'react';
import ProfileSummary from "../../ui/profile/profileSummary/profileSummary";
import ProfileNavigations from "../../ui/profile/profileNavigations/profileNavigations";
import ProfileStats from "../../ui/profile/profileStats/profileStats";

const ProfilePage = () => {
    return (
        // <div     className="columns is-multiline"     style={{         marginTop:
        // "20px"     }}>     <ProfileSummary/>     <ProfileNavigations/> <ProfileStats
        // /> </div>

        <div className="columns is-centered">
            <div className="column is-12">
                <div
                    className="tile is-ancestor"
                    style={{
                        marginTop: "10px"
                    }}>
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <ProfileSummary/>
                        </div>
                        <div className="tile is-child box">
                            <ProfileStats/>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <ProfileNavigations/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfilePage;