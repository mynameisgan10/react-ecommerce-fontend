import React from 'react';
import Styles from "./profileStats.css";

const ProfileStats = () => {
    return (
        <div className={[Styles.commentsContainer].join(" ")}>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>John Smith</strong>
                            <small>@johnsmith</small>
                            <small>31m</small>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                            eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-reply"/></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"/>
                </div>
            </article>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>John Smith</strong>
                            <small>@johnsmith</small>
                            <small>31m</small>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                            eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-reply"/></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"/>
                </div>
            </article>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>John Smith</strong>
                            <small>@johnsmith</small>
                            <small>31m</small>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                            eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-reply"/></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"/>
                </div>
            </article>
        </div>
    );
};

export default ProfileStats;