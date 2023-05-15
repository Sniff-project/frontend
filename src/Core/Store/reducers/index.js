import { combineReducers } from "redux";
import { logoutReducer, signInReducer, signUpReducer } from "./auth";
import { uploadAvatarReducer, profileReducer, changePasswordReducer } from "./users";
import { petProfileReducer } from "./pets";

const reducer = combineReducers({
  // auth
  logout: logoutReducer,
  signIn: signInReducer,
  signUp: signUpReducer,

  // users
  uploadAvatar: uploadAvatarReducer,
  profile: profileReducer,
  changePassword: changePasswordReducer,

  // pets
  petProfile: petProfileReducer
});

export default reducer;
