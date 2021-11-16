import {
  GenerateRandomGameBoard,
  generateAIAttackPos,
} from "../utils/RandomShipGenerator.js";

const defaultBoard = GenerateRandomGameBoard();

export default function AIReducer(gameBoard = defaultBoard, action) {
  if (action.type === "AI_CLICK" && action.isTurn) {
    let [x, y] = generateAIAttackPos();
    while (action.boardState[x][y] === "X" && action.boardState[x][y] === "V") {
      [x, y] = generateAIAttackPos();
    }
    const value = gameBoard[x][y];
    if (value === "*") {
      gameBoard[x][y] = "X";
    } else if (value === "") {
      gameBoard[x][y] = "V";
    }
    return [...gameBoard];
  }

  if (action.type === "RESET") return GenerateRandomGameBoard();

  return gameBoard;
}
