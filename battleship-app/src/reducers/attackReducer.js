const defaultState = [
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
];

export default function attackReducer(state = defaultState, action) {
  //let count = state.shipSpaceCount;
  //const gameBoard = state.gameBoard;
  if (action.type === "boardClick") {
    const value = state[action.x][action.y];
    if (value === "*") {
      state[action.x][action.y] = "X";
    } else if (value === "") {
      state[action.x][action.y] = "V";
    }
    // check winning condition;
    //const updatedGameBoard = [...gameBoard];
    //return { shipSpaceCount: count, gameBoard: updatedGameBoard };
    return [...state];
  }
  return state;
}
