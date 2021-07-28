import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogpostReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  blogs: blogReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
