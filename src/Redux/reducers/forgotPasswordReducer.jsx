// reducers.js

import {FORGOT_DATA_FAILURE,FORGOT_DATA_REQUEST, FORGOT_DATA_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  status: null,
  loading: false,
  error: null,
};

export const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_DATA_REQUEST:
      return {
        ...state,
        status: "pending",
        loading: true,
        error: null,
      };
    case FORGOT_DATA_SUCCESS:
      return {
        ...state,
        status: "success",
        loading: false,
        error: null,
      };
    case FORGOT_DATA_FAILURE:
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
