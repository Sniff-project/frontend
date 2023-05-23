import { combineReducers } from "redux";
import { logoutReducer, signInReducer, signUpReducer } from "./auth";
import {
  uploadAvatarReducer,
  profileReducer,
  changePasswordReducer,
  citiesReducer,
  regionsReducer,
} from "./users";
import {
  editPetProfileReducer,
  galleryReducer,
  petProfileReducer,
  uploadPhotosPetProfileReducer,
} from "./pets";


const reducer = combineReducers({
  // auth
  logout: logoutReducer,
  signIn: signInReducer,
  signUp: signUpReducer,

  // users
  uploadAvatar: uploadAvatarReducer,
  profile: profileReducer,
  changePassword: changePasswordReducer,
  cities: citiesReducer,
  regions: regionsReducer,

  // pets
  editPetProfile: editPetProfileReducer,
  gallery: galleryReducer
  petProfile: petProfileReducer,
  uploadPetPhotos: uploadPhotosPetProfileReducer,
});

export default reducer;
