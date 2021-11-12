import { combineReducers } from "redux";
import attackReducer from "./attackReducer";
import checkWinnerReducer from "./checkWinnerReducer";

export default combineReducers({
  attack: attackReducer,
  winner: checkWinnerReducer,
});
