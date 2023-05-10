import { combineReducers } from "redux";
import { signInReducer, signUpReducer } from "./auth";
import { profileReducer, changePasswordReducer } from "./users";

const reducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  changePassword: changePasswordReducer,
});

export default reducer;
