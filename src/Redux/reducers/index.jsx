import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { signInReducer } from "./signInReducer";
import { forgotReducer } from "./forgotPasswordReducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  forgot: forgotReducer,
});

export default rootReducer;
