export default function checkWinnerReducer(state = 17, action) {
  if (action.type === "") {
    return state + 1;
  }
  return state;
}
