import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);
