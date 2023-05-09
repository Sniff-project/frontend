import { combineReducers } from "redux";
import { signInReducer, signUpReducer } from "./auth";
import { uploadAvatarReducer, profileReducer, changePasswordReducer } from "./users";

const reducer = combineReducers({
  // auth
  signIn: signInReducer,
  signUp: signUpReducer,

  // profile
  uploadAvatar: uploadAvatarReducer,
  profile: profileReducer,
  changePassword: changePasswordReducer,
});

export default reducer;
