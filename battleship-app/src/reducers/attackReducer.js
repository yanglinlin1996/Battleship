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
  if (action.type === "boardClick") {
    const value = state[action.x][action.y];
    if (value === "*") {
      state[action.x][action.y] = "X";
    } else if (value === "") {
      state[action.x][action.y] = "V";
    }
    return [...state];
  }

  if (action.type === "RESET") {
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state.length; j++) {
        state[i][j] = "";
      }
    }
    return [...state];
  }

  return state;
}
