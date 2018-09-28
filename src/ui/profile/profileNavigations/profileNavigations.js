import React, {Component} from 'react';
import Products from "../../products/products";
import Follows from "../../follows/follows";
// import ProfileNavigations from "./ProfileNavigations.css";
import {Route} from "react-router-dom"
import {connect} from 'react-redux';
import * as actions from "../../../store/actions/index"
import {withRouter} from 'react-router';
import {Link, Redirect} from 'react-router-dom';

class ProfileNavigations extends Component {
    componentDidMount() {
        this
            .props
            .getProfileItems();
    }
    state = {
        activeIndex: 0,
        paths: [
            {
                link: '/profile/listings',
                name: 'Listings',
                active: true
            }, {
                link: '/profile/followers',
                name: 'Followers',
                active: false
            }, {
                link: '/profile/following',
                name: 'Following',
                active: false
            }, {
                link: '/profile/saved',
                name: 'Saved',
                active: false
            }
        ]
    }

    render() {
        const navigations = this.state.paths.map(
            (path, index) => <li className={path.active ? "is-active" : ""}>
                <Link to={path.link}>{path.name}</Link>
            </li>
        )
        const Fragment = React.Fragment;
        return (

            <Fragment>
                <div className="tabs is-centered">
                    <ul>
                        {navigations}
                    </ul>
                </div>
                <div className="columns">
                    <div className="column is-12">
                        {/* <Products selling={false} items={this.props.items}/> */}
                        <Route
                            path="/profile/listings"
                            exact="exact"
                            render={() => <Products selling={false} items={this.props.items}/>
                            }
                        />
                        <Route
                            path="/profile/following"
                            exact="exact"
                            render={() => <Follows
                                followings={[
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1
                                ]}/>
                            }
                        />
                        <Route
                            path="/profile/followers"
                            exact="exact"
                            render={() => <Follows
                                followings={[
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1
                                ]}/>
                            }
                        />
                        <Route
                            path="/profile"
                            exact="exact"
                            render={() => <Redirect to="/profile/listings"/>
                            }
                        />
                    </div>
                </div>
            </Fragment>

        );
    }
};

const mapStateToProps = state => {
    return {items: state.profile.profileItems}
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileItems: () => dispatch(actions.getUserProfile())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    ProfileNavigations
));