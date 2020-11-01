import { combineReducers } from "redux";
import postReducers from "./postReducers";
import userReducer from "./usersReducers";
export default combineReducers({
    posts: postReducers,
    users: userReducer,
});
