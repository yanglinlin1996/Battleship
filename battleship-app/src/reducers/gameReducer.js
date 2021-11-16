import {
  GenerateRandomGameBoard,
  generateAIAttackPos,
} from "../utils/RandomShipGenerator.js";

const defaultState = {
  gameBoard: {
    humanBoard: GenerateRandomGameBoard(),
    AIBoard: GenerateRandomGameBoard(),
  },
  playerTurn: true,
};

function AIClick(AIBoard) {
  let [x, y] = generateAIAttackPos();
  while (AIBoard[x][y] === "X" || AIBoard[x][y] === "V") {
    [x, y] = generateAIAttackPos();
  }
  const value = AIBoard[x][y];
  if (value === "*") {
    AIBoard[x][y] = "X";
  } else if (value === "") {
    AIBoard[x][y] = "V";
  }
}

export default function gameReducer(state = defaultState, action) {
  let { gameBoard, playerTurn } = state;
  // human's turn
  if (action.type === "HUMAN_CLICK" && action.playerBoard && action.playerTurn) {
    const value = gameBoard["humanBoard"][action.x][action.y];
    if (value === "*") {
      gameBoard["humanBoard"][action.x][action.y] = "X";
    } else if (value === "") {
      gameBoard["humanBoard"][action.x][action.y] = "V";
    }

    playerTurn = false;

    return {
      gameBoard: {
        humanBoard: [...gameBoard.humanBoard],
        AIBoard: [...gameBoard.AIBoard],
      },
      playerTurn: playerTurn,
    };
  }

  if (action.type === "AI_CLICK" && action.playerBoard && !playerTurn) {
    AIClick(gameBoard["AIBoard"])
    playerTurn = true;
    return {
      gameBoard: {
        humanBoard: [...gameBoard.humanBoard],
        AIBoard: [...gameBoard.AIBoard],
      },
      playerTurn: playerTurn,
    };
  }

  if (action.type === "RESET") return defaultState;

  return state;
}