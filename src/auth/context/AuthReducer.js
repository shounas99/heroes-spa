import { types } from "../types/types";

export const AuthReducer = ( state = { }, action ) => {
    switch ( action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                named: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }
    
        default:
            return state;
    }

}