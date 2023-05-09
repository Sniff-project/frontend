import { combineReducers } from "redux";
import { logoutReducer, signInReducer, signUpReducer } from "./auth";
import { uploadAvatarReducer, profileReducer, changePasswordReducer } from "./users";

const reducer = combineReducers({
  // auth
  logout: logoutReducer,
  signIn: signInReducer,
  signUp: signUpReducer,

  // profile
  uploadAvatar: uploadAvatarReducer,
  profile: profileReducer,
  changePassword: changePasswordReducer,
});

export default reducer;
