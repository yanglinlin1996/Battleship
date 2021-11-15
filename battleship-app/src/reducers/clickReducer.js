const defaultState = {
  totalClicks: 0,
  humanAttacked: 0,
  AIAttacked: 0,
  winner: "",
};

export default function clickReducer(state = defaultState, action) {
  let { totalClicks, humanAttacked, AIAttacked, winner } = state;
  if (action.type === "HUMAN_CLICK" && action.isTurn) {
    totalClicks++;
    humanAttacked++;
    if (humanAttacked === 17) {
      winner = "human";
    }
    return {
      totalClicks: totalClicks,
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
    };
  }

  if (action.type === "AI_CLICK" && action.isTurn) {
    totalClicks++;
    AIAttacked++;
    if (AIAttacked === 17) {
      winner = "AI";
    }
    return {
      totalClicks: totalClicks,
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
