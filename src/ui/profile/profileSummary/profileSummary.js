import React from 'react';

const ProfileSummary = () => {
    const Fragment = React.Fragment;
    return (
        <Fragment>
        <article className="media">
            <div className="media-left">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>UserName</strong>
                        <small>@username</small>
                        <small>31m</small>
                        <br/>
                        Verification information
                        <br/>
                        Joined May 2017
                        <br/>
                        User's Location
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item" aria-label="reply">
                            <span className="icon is-small">
                                <i className="fas fa-reply" aria-hidden="true"/>
                            </span>
                        </a>
                        <a className="level-item" aria-label="retweet">
                            <span className="icon is-small">
                                <i className="fas fa-retweet" aria-hidden="true"/>
                            </span>
                        </a>
                        <a className="level-item" aria-label="like">
                            <span className="icon is-small">
                                <i className="fas fa-heart" aria-hidden="true"/>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
        <div style={{marginTop:"10px"}}>
            <p>Some short description about the life</p>
        </div>
        </Fragment>

    );
};

export default ProfileSummary;