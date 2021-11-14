import { GenerateRandomGameBoard } from "../utils/RandomShipGenerator.js";

const defaultState = {
    attackedCount: 0,
    gameBoard: GenerateRandomGameBoard()
};

export default function AIReducer(state = defaultState, action) {
    let { attackedCount, gameBoard } = state;
    if (action.type === "AI_CLICK") {
        const value = gameBoard[action.x][action.y];
        if (value === "*") {
            gameBoard[action.x][action.y] = "X";
        } else if (value === "") {
            gameBoard[action.x][action.y] = "V";
        }
        // check winning condition
        if (action.picked === "*") 
            attackedCount++;
        const newGameBoard = [...gameBoard]
        return { attackedCount: attackedCount, gameBoard: newGameBoard } ;
    }

    if (action.type === "RESET") {
        const resetGameBoard = GenerateRandomGameBoard();
        return { attackedCount: attackedCount, gameBoard: resetGameBoard };
    }

    return state;
}
