import {
  ACTION,
  ATTACK_SYMBOL,
  EMPTY_SYMBOL,
  INITIAL_ATTACK_COUNT,
  MISSED_SYMBOL,
  PLAYER,
  SHIP_SYMBOL,
  WIN_COUNT,
} from "../utils/Constants.js";
import {
  GenerateRandomGameBoard,
  generateAIAttackPos,
} from "../utils/RandomShipGenerator.js";

const generateDefaultState = () => {
  return {
    gameBoard: {
      playerBoard: GenerateRandomGameBoard(),
      AIBoard: GenerateRandomGameBoard(),
    },
    playerTurn: true,
    humanAttacked: INITIAL_ATTACK_COUNT,
    AIAttacked: INITIAL_ATTACK_COUNT,
    winner: "",
    isGameOver: false,
  };
};

function computeFire(clickBoard, playerAttacked, player, x, y) {
  let [attackX, attackY] = [x, y];
  if (player === PLAYER.AI) {
    [attackX, attackY] = generateAIAttackPos();
    while (
      clickBoard[attackX][attackY] === ATTACK_SYMBOL ||
      clickBoard[attackX][attackY] === MISSED_SYMBOL
    ) {
      [attackX, attackY] = generateAIAttackPos();
    }
  }
  return fireShip(clickBoard, playerAttacked, attackX, attackY);
}

function fireShip(clickBoard, playerAttacked, x, y) {
  const value = clickBoard[x][y];
  let playerAttackCount = playerAttacked;
  if (value === SHIP_SYMBOL) {
    clickBoard[x][y] = ATTACK_SYMBOL;
    playerAttackCount++;
  } else if (value === EMPTY_SYMBOL) {
    clickBoard[x][y] = MISSED_SYMBOL;
  }
  return playerAttackCount;
}

const checkValidTurn = (
  isGameOver,
  player,
  actionType,
  isPlayerBoard,
  playerTurn
) => {
  if (isGameOver || !isPlayerBoard || !playerTurn) return false;
  else if (player === PLAYER.PLAYER) return actionType === ACTION.PLAYER_CLICK;
  else if (player === PLAYER.AI) return actionType === ACTION.AI_CLICK;
};

const isWinning = (player, attackedCount) => {
  if (attackedCount === WIN_COUNT) {
    return { winner: player, isGameOver: true };
  }
  return { winner: "", isGameOver: false };
};

export default function gameReducer(state, action) {
  if (state === undefined) {
    return generateDefaultState();
  }
  let { gameBoard, playerTurn, humanAttacked, AIAttacked, isGameOver } =
    state;
  // human's turn
  if (
    checkValidTurn(
      isGameOver,
      PLAYER.PLAYER,
      action.type,
      action.isPlayerBoard,
      action.playerTurn
    )
  ) {
    if (
      gameBoard.playerBoard[action.x][action.y] !== ATTACK_SYMBOL &&
      gameBoard.playerBoard[action.x][action.y] !== MISSED_SYMBOL
    ) {
      playerTurn = false;
    }
    humanAttacked = computeFire(
      gameBoard.playerBoard,
      humanAttacked,
      PLAYER.PLAYER,
      action.x,
      action.y
    );
    const { winner, isGameOver } = isWinning(PLAYER.PLAYER, humanAttacked);

    gameBoard = {
      playerBoard: [...gameBoard.playerBoard],
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
      PLAYER.AI,
      action.type,
      action.isPlayerBoard,
      !playerTurn
    )
  ) {
    console.log("AI is attacking....");
    AIAttacked = computeFire(
      gameBoard.AIBoard,
      AIAttacked,
      PLAYER.AI,
      action.x,
      action.y
    );
    const { winner, isGameOver } = isWinning(PLAYER.AI, AIAttacked);
    playerTurn = true;

    gameBoard = {
      playerBoard: [...gameBoard.playerBoard],
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
