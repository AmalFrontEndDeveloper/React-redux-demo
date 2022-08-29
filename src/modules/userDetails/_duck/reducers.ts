import actionTypes from "./action-types";
import {combineReducers} from 'redux'

const tempActionsTypes = actionTypes();


export const getUserDetailReducer = (state: any = [], action: any) => {
    if (action.type === tempActionsTypes.GET_USER_DETAILS_DATA) {
        return action.payload;
    }
    console.log(state);
    return state;
}


export const userDetailsComponentReducer = combineReducers({
    getUserDetail :getUserDetailReducer
})