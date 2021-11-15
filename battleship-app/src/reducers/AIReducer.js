import { GenerateRandomGameBoard } from "../utils/RandomShipGenerator.js";

const defaultBoard = GenerateRandomGameBoard();

export default function AIReducer(gameBoard = defaultBoard, action) {
  if (action.type === "AI_CLICK" && action.isTurn) {
    const value = gameBoard[action.x][action.y];
    if (value === "*") {
      gameBoard[action.x][action.y] = "X";
    } else if (value === "") {
      gameBoard[action.x][action.y] = "V";
    }
    return [...gameBoard];
  }

  if (action.type === "RESET") return GenerateRandomGameBoard();

  return gameBoard;
}
