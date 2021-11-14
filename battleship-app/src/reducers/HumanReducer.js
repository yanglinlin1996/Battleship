import { GenerateRandomGameBoard } from "../utils/RandomShipGenerator.js";

const defaultState = {
    attackedCount: 0,
    gameBoard: GenerateRandomGameBoard(),
}

export default function humanReducer(state = defaultState, action) {
    let { attackedCount, gameBoard } = state;
    if (action.type === "HUMAN_CLICK") {
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
        // for (let i = 0; i < gameBoard.length; i++) {
        //     for (let j = 0; j < gameBoard.length; j++) {
        //         gameBoard[i][j] = "";
        //     }
        // }
        
        const resetGameBoard = GenerateRandomGameBoard();
        return { attackedCount: attackedCount, gameBoard: resetGameBoard };
    }

    return state;
}
