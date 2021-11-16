import { combineReducers } from "redux";
// import humanReducer from "./HumanReducer";
// import AIReducer from "./AIReducer";
import countReducer from "./countReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  // human: humanReducer,
  // AI: AIReducer,
  gameReducer: gameReducer,
  // countReducer: countReducer,
});
