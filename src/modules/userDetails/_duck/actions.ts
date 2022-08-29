import actionTypes from "./action-types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { AppAPI } from '../../../utility/services';

const tempActionsTypes = actionTypes();


const getUserDetailsData = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getSate: any) => {
    // dispatch({
    //     type: tempActionsTypes.ERROR_USER_DETAILS_DATA,
    //     payload: false
    // })

    return await AppAPI.getUserDetails().then((res: any) => {
        console.log('res',res);
      dispatch({
        type: tempActionsTypes.GET_USER_DETAILS_DATA,
        payload: res.data
    })
    }).catch((error: any) => {
        dispatch({
            type: tempActionsTypes.ERROR_USER_DETAILS_DATA,
            payload: false
        })
    })

}

export { getUserDetailsData }