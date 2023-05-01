import { combineReducers } from "redux";
import { signInReducer, signUpReducer } from "./auth";
import { profileReducer } from "./users";

const reducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
});

export default reducer;
