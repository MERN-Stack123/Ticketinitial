// signinAction.js

import { SIGNIN_DATA_FAILURE, SIGNIN_DATA_REQUEST, SIGNIN_DATA_SUCCESS } from "./actionsTypes";
  
  // Action Creators
  export const signinDataRequest = () => ({
    type: SIGNIN_DATA_REQUEST,
  });
  
  export const signinDataSuccess = () => ({
    type: SIGNIN_DATA_SUCCESS,
  });
  
  export const signinDataFailure = (error) => ({
    type: SIGNIN_DATA_FAILURE,
    payload: error,
  });
  