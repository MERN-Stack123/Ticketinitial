// signupAction.js

import { SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS } from "./actionsTypes";

// Action Creators
export const signupDataRequest = () => ({
  type: SIGNUP_DATA_REQUEST,
});

export const signupDataSuccess = () => ({
  type: SIGNUP_DATA_SUCCESS,
});

export const signupDataFailure = (error) => ({
  type: SIGNUP_DATA_FAILURE,
  payload: error,
});
