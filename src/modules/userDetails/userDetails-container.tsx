import React from 'react';
import { connect } from "react-redux";
import { getUserDetailsData } from "./_duck/actions";
import UserDetailComponent from './userDetails';
import { userDetailsProps } from './userDetails-interface';

class UserDetailsContainer extends React.Component<userDetailsProps, any> {
    render() {
        return (<div className="card-content">
            <UserDetailComponent  {...this.props}></UserDetailComponent>
        </div>)
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const uGauageApplication = state.app;
    return {
        uGauageApp: uGauageApplication,
        userDetailList: uGauageApplication.uGaugeApp.userDetails.getUserDetail
    };

};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserDetailsData: () => dispatch(getUserDetailsData())
        // dispatching plain actionsincrement: () => dispatch({ type: 'INCREMENT' }),decrement: () => dispatch({ type: 'DECREMENT' }),reset: () => dispatch({ type: 'RESET' }),
    }
}

export default connect(
    mapStateToProps,
    // {
    //     getUserDetailsData
    // },
    mapDispatchToProps
)(UserDetailsContainer);