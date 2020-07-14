import { combineReducers } from "redux";
import quiz from "./quiz";
import literals from "./literals.js";

export default combineReducers({
  quiz,
  literals,
});
