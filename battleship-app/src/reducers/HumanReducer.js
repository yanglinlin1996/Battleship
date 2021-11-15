import { GenerateRandomGameBoard } from "../utils/RandomShipGenerator.js";

const defaultState = {
  attackedCount: 0,
  gameBoard: GenerateRandomGameBoard(),
  winner: "",
};

export default function humanReducer(state = defaultState, action) {
  let { attackedCount, gameBoard, winner } = state;
  if (winner) return state;
  if (action.type === "HUMAN_CLICK" && action.isTurn) {
    const value = gameBoard[action.x][action.y];
    if (value === "*") {
      gameBoard[action.x][action.y] = "X";
    } else if (value === "") {
      gameBoard[action.x][action.y] = "V";
    }
    // check winning condition
    if (action.picked === "*") attackedCount++;
    const newGameBoard = [...gameBoard];

    if (attackedCount === 17) {
      winner = "YOU";
    }
    return {
      attackedCount: attackedCount,
      gameBoard: newGameBoard,
      winner: winner,
    };
  }

  if (action.type === "RESET") {
    const resetGameBoard = GenerateRandomGameBoard();
    return { attackedCount: attackedCount, gameBoard: resetGameBoard };
  }

  return state;
}
