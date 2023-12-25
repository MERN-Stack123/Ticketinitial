// FORGOTAction.js

import { FORGOT_DATA_FAILURE, FORGOT_DATA_REQUEST, FORGOT_DATA_SUCCESS } from "./actionsTypes";
  
  // Action Creators
  export const forgotDataRequest = () => ({
    type: FORGOT_DATA_REQUEST,
  });
  
  export const forgotDataSuccess = () => ({
    type: FORGOT_DATA_SUCCESS,
  });
  
  export const forgotDataFailure = (error) => ({
    type: FORGOT_DATA_FAILURE,
    payload: error,
  });
  