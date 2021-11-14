import { combineReducers } from "redux";
import humanReducer from "./HumanReducer";
import AIReducer from './AIReducer'
import checkWinnerReducer from "./checkWinnerReducer";

export default combineReducers({
  human: humanReducer,
  AI: AIReducer,
  winner: checkWinnerReducer,
});
