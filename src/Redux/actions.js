import { REGISTER_FAILURE, REGISTER_STATUS, REGISTER_SUCCESS } from "./actionTypes";

export const getRegStatus = () => {
    return {
        type: REGISTER_STATUS,
    };
};

export const getRegSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
};

export const getRegFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: error,
    };
};


export const RegisterAction = (payLoad) => {
    return (dispatch) => {
        console.log("hi");
    }
}