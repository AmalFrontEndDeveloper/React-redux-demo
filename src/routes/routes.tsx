import React from 'react';
import { Routes, Route } from "react-router-dom"
import Customer from "../modules/customer/customer";
import Dashboard from "../modules/dashboard/dashboard";
import Miscellaneous from "../modules/miscellaneous/miscellaneous";
import Proposal from "../modules/proposal/proposal";
import RateContainer from "../modules/rate/rate-container";
import UserDetailsContainer from "../modules/userDetails/userDetails-container";
// const RouterConfig = () => {
export default ( props: any ) => {
    console.log('props', props);
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                {/* <Route path="/userDetails"  element={<UserDetailsContainer   {...props} />}  /> */}
                <Route path="/rate"  element={<RateContainer   {...props} />}  />
                {/* <Route
                    path="/userDetails"
                    render={(props:any) => <UserDetails {...props} isAuthed={true} />}
                /> */}
                {/* <Route path="/miscellaneous" element={<Miscellaneous />} /> */}
                <Route path="/customer" element={<Customer />} />
                <Route path="/proposal" element={<Proposal />} />
            </Routes>
        </>
    )
}

// export default RouterConfig;