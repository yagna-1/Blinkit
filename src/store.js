import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import imageReducer from "./reducers/imageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  image: imageReducer,
});

const store = createStore(rootReducer);

export default store;
