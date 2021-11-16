import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board(props) {

    const playerBoard = props.playerBoard;

    const gameState = useSelector((state) => state.gameReducer);
    const boardState = gameState.gameBoard[playerBoard];
    const playerTurn = gameState.playerTurn;
    const winner = gameState.winner;

    const boardComponent = [];

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
            {boardComponent}
            {/* Human:{gameState.humanAttacked} AI:{gameState.AIAttacked} */}
        </div> 
    );
}