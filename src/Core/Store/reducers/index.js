import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { profileReducer } from "./users";

const reducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default reducer;
