import {
  GenerateRandomGameBoard,
  generateAIAttackPos,
} from "../utils/RandomShipGenerator.js";

const defaultState = {
  curPlayer: "human",
  gameBoard: {
    humanBoard: GenerateRandomGameBoard(),
    AIBoard: GenerateRandomGameBoard(),
  },
};

export default function gameReducer(state = defaultState, action) {
  let { curPlayer, gameBoard } = state;
  // human's turn
  if (action.type === "BOARD_CLICK" && action.curPlayer === "human") {
    const value = gameBoard["humanBoard"][action.x][action.y];
    if (value === "*") {
      gameBoard["humanBoard"][action.x][action.y] = "X";
    } else if (value === "") {
      gameBoard["humanBoard"][action.x][action.y] = "V";
    }
    curPlayer = "AI";
    return { curPlayer: curPlayer, gameBoard: { ...gameBoard } };
  }

  // AI's turn
  if (action.type === "BOARD_CLICK" && action.curPlayer === "AI") {
    let [x, y] = generateAIAttackPos();
    while (action.boardState[x][y] === "X" && action.boardState[x][y] === "V") {
      [x, y] = generateAIAttackPos();
    }
    const value = gameBoard["AIBoard"][x][y];
    if (value === "*") {
      gameBoard["AIBoard"][x][y] = "X";
    } else if (value === "") {
      gameBoard["AIBoard"][x][y] = "V";
    }
    curPlayer = "human";
    return { curPlayer: curPlayer, gameBoard: { ...gameBoard } };
  }

  if (action.type === "RESET") return defaultState;

  return state;
}
