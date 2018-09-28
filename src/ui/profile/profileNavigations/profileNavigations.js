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

    render() {
        const Fragment = React.Fragment;
        return (

            <Fragment>
                <div className="tabs is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/profile/listings'>Listings</Link>
                        </li>
                        <li>
                            <Link to='/profile/followers'>Followers</Link>
                        </li>
                        <li>
                            <Link to='/profile/following'>Following</Link>
                        </li>
                        <li>
                            <Link to='/profile/saved'>Saved</Link>
                        </li>
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
                        <Route path="/profile" render={() => <Redirect to="/profile/listings"/>}/>
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