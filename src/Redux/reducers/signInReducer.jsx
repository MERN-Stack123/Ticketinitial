// reducers.js

import {SIGNIN_DATA_FAILURE,SIGNIN_DATA_REQUEST, SIGNIN_DATA_SUCCESS,
  } from "../actions/actionsTypes";
  
  const initialState = {
    status: " ",
    loading: false,
    error: null,
  };
  
  export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNIN_DATA_REQUEST:
        return {
          ...state,
          status: "pending",
          loading: true,
          error: null,
        };
      case SIGNIN_DATA_SUCCESS:
        return {
          ...state,
          status: "success",
          loading: false,
          error: null,
        };
      case SIGNIN_DATA_FAILURE:
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
  