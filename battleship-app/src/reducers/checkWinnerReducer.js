export default function checkWinnerReducer(state = 17, action) {
  if (action.type === "boardClick") {
    if (action.picked === "*") {
      return state - 1;
    }
  }
  return state;
}
