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
  humanAttacked: 0,
  AIAttacked: 0,
  winner: "",
  isGameOver: false
};

function AIClick(AIBoard, AIAttacked) {
  let [x, y] = generateAIAttackPos();
  while (AIBoard[x][y] === "X" || AIBoard[x][y] === "V") {
    [x, y] = generateAIAttackPos();
  }
  const value = AIBoard[x][y];
  if (value === "*") {
    AIBoard[x][y] = "X";
    AIAttacked++;
  } else if (value === "") {
    AIBoard[x][y] = "V";
  }
  return AIAttacked;
}

export default function gameReducer(state = defaultState, action) {
  let { gameBoard, playerTurn, humanAttacked, AIAttacked, winner, isGameOver } = state;
  // human's turn
  if (!isGameOver && action.type === "HUMAN_CLICK" && action.playerBoard && action.playerTurn) {
    const value = gameBoard["humanBoard"][action.x][action.y];
    if (value === "*") {
      gameBoard["humanBoard"][action.x][action.y] = "X";
      humanAttacked++;
    } else if (value === "") {
      gameBoard["humanBoard"][action.x][action.y] = "V";
    }

    if (humanAttacked === 17) {
      winner = "YOU";
      isGameOver = true;
    }
    if (value !== "X" && value !== "V") {
      playerTurn = false;
    }

    return {
      gameBoard: {
        humanBoard: [...gameBoard.humanBoard],
        AIBoard: [...gameBoard.AIBoard],
      },
      playerTurn: playerTurn,
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
      isGameOver: isGameOver
    };
  }

  if (!isGameOver && action.type === "AI_CLICK" && action.playerBoard && !playerTurn) {
    AIAttacked = AIClick(gameBoard["AIBoard"], AIAttacked);
    if (AIAttacked === 17) {
      winner = "AI";
      isGameOver = true;
    }
    playerTurn = true;

    return {
      gameBoard: {
        humanBoard: [...gameBoard.humanBoard],
        AIBoard: [...gameBoard.AIBoard],
      },
      playerTurn: playerTurn,
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
      isGameOver: isGameOver
    };
  }

  if (action.type === "RESET") return defaultState;

  return state;
}
