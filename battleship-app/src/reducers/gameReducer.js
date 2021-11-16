import {
  GenerateRandomGameBoard,
  generateAIAttackPos,
} from "../utils/RandomShipGenerator.js";

const generateDefaultState = () => {
  return {
    gameBoard: {
      humanBoard: GenerateRandomGameBoard(),
      AIBoard: GenerateRandomGameBoard(),
    },
    playerTurn: true,
    humanAttacked: 0,
    AIAttacked: 0,
    winner: "",
    isGameOver: false,
  };
};

function computeFire(playerBoard, playerAttacked, player, x, y) {
  let [attackX, attackY] = [x, y];
  if (player === "computer") {
    [attackX, attackY] = generateAIAttackPos();
    while (
      playerBoard[attackX][attackY] === "X" ||
      playerBoard[attackX][attackY] === "V"
    ) {
      [attackX, attackY] = generateAIAttackPos();
    }
  }
  return fireShip(playerBoard, playerAttacked, attackX, attackY);
}

function fireShip(playerBoard, playerAttacked, x, y) {
  const value = playerBoard[x][y];
  let playerAttackCount = playerAttacked;
  if (value === "*") {
    playerBoard[x][y] = "X";
    playerAttackCount++;
  } else if (value === "") {
    playerBoard[x][y] = "V";
  }
  return playerAttackCount;
}

const checkValidTurn = (
  isGameOver,
  player,
  actionType,
  playerBoard,
  playerTurn
) => {
  if (isGameOver || !playerBoard || !playerTurn) return false;
  else if (player === "human") return actionType === "HUMAN_CLICK";
  else if (player === "AI") return actionType === "AI_CLICK";
};

const isWinning = (player, attackedCount) => {
  if (attackedCount === 17) {
    return { winner: player, isGameOver: true };
  }
  return { winner: "", isGameOver: false };
};

export default function gameReducer(state, action) {
  if (state === undefined) {
    return generateDefaultState();
  }
  let { gameBoard, playerTurn, humanAttacked, AIAttacked, winner, isGameOver } =
    state;
  // human's turn
  if (
    checkValidTurn(
      isGameOver,
      "human",
      action.type,
      action.playerBoard,
      action.playerTurn
    )
  ) {
    if (
      gameBoard["humanBoard"][action.x][action.y] !== "X" &&
      gameBoard["humanBoard"][action.x][action.y] !== "V"
    ) {
      playerTurn = false;
    }
    humanAttacked = computeFire(
      gameBoard["humanBoard"],
      humanAttacked,
      "human",
      action.x,
      action.y
    );
    const { winner, isGameOver } = isWinning("YOU", humanAttacked);

    gameBoard = {
      humanBoard: [...gameBoard.humanBoard],
      AIBoard: [...gameBoard.AIBoard],
    };
    return {
      gameBoard,
      playerTurn,
      humanAttacked,
      AIAttacked,
      winner,
      isGameOver,
    };
  }

  if (
    checkValidTurn(
      isGameOver,
      "AI",
      action.type,
      action.playerBoard,
      !playerTurn
    )
  ) {
    console.log("AI is attacking....");
    AIAttacked = computeFire(
      gameBoard["AIBoard"],
      AIAttacked,
      "computer",
      action.x,
      action.y
    );
    const { winner, isGameOver } = isWinning("AI", AIAttacked);
    playerTurn = true;

    gameBoard = {
      humanBoard: [...gameBoard.humanBoard],
      AIBoard: [...gameBoard.AIBoard],
    };

    return {
      gameBoard,
      playerTurn,
      humanAttacked,
      AIAttacked,
      winner,
      isGameOver,
    };
  }

  if (action.type === "RESET") {
    return generateDefaultState();
  }

  return state;
}
