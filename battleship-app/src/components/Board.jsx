import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board(props) {

    const playerBoard = props.playerBoard;

    const gameState = useSelector((state) => state.gameReducer);
    // const countState = useSelector((state) => state.countReducer);
    console.log("Game state: " + gameState.gameBoard);
    console.log("Player board is: " + playerBoard);
    const boardState = gameState.gameBoard[playerBoard];
    const playerTurn = gameState.playerTurn;
    const winner = gameState.winner;

    const boardComponent = [];

    console.log("Current Board State is: " + boardState);

    

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol = {boardState[i][j]} playerBoard={playerBoard === "humanBoard"} x = {i} y = {j} playerTurn = {playerTurn}/>);
        }
    }

    function getWinner(winner) {
        if (winner) {
            props.checkWinner(winner);
        }
    }

    return (
        <div id="board" getWinner={getWinner(winner)} >
        {/* <div id="board" > */}
            {boardComponent}
            {/* Human:{clicksState.humanAttacked} AI:{clicksState.AIAttacked} */}
        </div> 
    );
}