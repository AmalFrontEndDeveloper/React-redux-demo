import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppAPI } from "../../../utility/services";
import actionTypes from "./action-types";

const tempActionsTypes = actionTypes();

const getRoleAccess = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getSate: any) => {
    return await AppAPI.getRoleTypes().then(() => {

    });
}


export { getRoleAccess }