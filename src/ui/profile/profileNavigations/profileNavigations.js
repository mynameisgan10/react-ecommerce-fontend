import React, {Component} from 'react';
import Products from "../../products/products";
import Follows from "../../follows/follows";
// import ProfileNavigations from "./ProfileNavigations.css";
import {connect} from'react-redux';
import * as actions from "../../../store/actions/index"

class ProfileNavigations extends Component {
    componentDidMount(){
        console.log("this is profile navigations");
        this.props.getProfileItems();
    }


    render() {
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

                        <Products
                            selling={false}
                            items={this.props.items}/> {/* <Follows />
                    <Follows />
                    <Follows /> */
                        }

                    </div>
                </div>
            </Fragment>

        );
    }
};

const mapStateToProps = state => {
    return {
        items: state.profile.profileItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileItems: () => dispatch(actions.getUserProfile())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileNavigations);