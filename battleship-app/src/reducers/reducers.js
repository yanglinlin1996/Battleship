import { combineReducers } from "redux";
import humanReducer from "./HumanReducer";
import AIReducer from "./AIReducer";
import clickReducer from "./clickReducer";

export default combineReducers({
  human: humanReducer,
  AI: AIReducer,
  totalClicks: clickReducer,
});
