const defaultState = {
  humanAttacked: 0,
  AIAttacked: 0,
  winner: "",
};

export default function clickReducer(state = defaultState, action) {
  let { humanAttacked, AIAttacked, winner } = state;
  if (
    action.type === "BOARD_CLICK" &&
    action.curPlayer === "human" &&
    action.symbol === "*"
  ) {
    humanAttacked++;
    if (humanAttacked === 17) {
      winner = "human";
    }
    return {
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
    };
  }

  if (action.type === "BOARD_CLICK" && action.curPlayer === "AI") {
    let attackedCount = 0;
    for (let i = 0; i < action.boardState.length; i++) {
      let row = action.boardState[i];
      for (let j = 0; j < row.length; j++) {
        if (action.boardState[i][j] === "X") {
          attackedCount++;
        }
      }
    }
    // if (action.symbol === "*") {
    //   AIAttacked++;
    // }
    AIAttacked = attackedCount;
    if (AIAttacked === 17) {
      winner = "AI";
    }
    return {
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
    };
  }

  if (action.type === "RESET") {
    return defaultState;
  }
  return state;
}
