import { combineReducers } from "redux";
import FeedBack from './FeedBack'
import auth from './auth'

//combinig reducer
export default combineReducers({
    FeedBack,
    auth
})