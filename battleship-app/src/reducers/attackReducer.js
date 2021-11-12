const defaultState = {
  shipSpaceCount: 17,
  gameBoard: [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "*", "*", "*", "*", "*", ""],
    ["", "*", "", "", "", "", "", "", "", ""],
    ["", "*", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "*", "*", "*", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "*", ""],
    ["*", "*", "*", "*", "", "", "", "", "*", ""],
    ["", "", "", "", "", "", "", "", "*", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
};

export default function attackReducer(state = defaultState, action) {
  let count = state.shipSpaceCount;
  const gameBoard = state.gameBoard;
  if (action.type === "boardClick") {
    const value = gameBoard[action.x][action.y];
    if (value === "*") {
      gameBoard[action.x][action.y] = "X";
      count--;
    } else {
      gameBoard[action.x][action.y] = "V";
    }
    // check winning condition;
    const updatedGameBoard = [...gameBoard];
    return { count, updatedGameBoard };
  }
  return state;
}
