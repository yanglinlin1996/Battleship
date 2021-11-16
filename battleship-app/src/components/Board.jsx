import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board(props) {

    const playerBoard = props.playerBoard;

    //const boardState = useSelector((state) => state[player]);

    // const clickState = useSelector((state) => state.totalClicks);
    // const totalClicks = clickState.totalClicks;
    // const winner = clickState.winner;
    const gameState = useSelector((state) => state.gameReducer);
    const countState = useSelector((state) => state.countReducer);
    console.log("Game state: " + gameState.gameBoard);
    console.log("Player board is: " + playerBoard);
    const boardState = gameState.gameBoard[playerBoard];
    const curPlayer = gameState.curPlayer;
    const winner = countState.winner;

    const boardComponent = [];

    console.log("Current Board State is: " + boardState);

    

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol = {boardState[i][j]} boardState = {boardState} x = {i} y = {j} player = {curPlayer} winner={winner}/>);
        }
    }

    function getWinner(winner) {
        if (winner) {
            props.checkWinner(winner);
        }
    }

    return (
        <div id="board" getWinner={getWinner(winner)} >
            {boardComponent}
            {/* Human:{clickState.humanAttacked} AI:{clickState.AIAttacked} Total:{totalClicks} */}
        </div> 
    );
}