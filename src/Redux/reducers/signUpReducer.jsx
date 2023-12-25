// reducers.js

import {SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS} from "../actions/actionsTypes";
  
  const initialState = {
    status: " ",
    loading: false,
    error: null,
  };
  
  export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_DATA_REQUEST:
        return {
          ...state,
          status: "pending",
          loading: true,
          error: null,
        };
      case SIGNUP_DATA_SUCCESS:
        return {
          ...state,
          status: "success",
          loading: false,
          error: null,
        };
      case SIGNUP_DATA_FAILURE:
        return {
          ...state,
          status: "error",
          loading: false,
          error: action.payload,
        };
      default:
        return state;  
    }
  };
  