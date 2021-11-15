export default function clickReducer(state = 0, action) {
  if (
    (action.type === "HUMAN_CLICK" || action.type === "AI_CLICK") &&
    action.isTurn
  ) {
    return state + 1;
  }

  if (action.type === "RESET") {
    return 0;
  }
  return state;
}
