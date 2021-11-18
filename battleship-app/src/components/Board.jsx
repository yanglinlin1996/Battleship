import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';
import { PLAYER_BOARD } from "../utils/Constants";

export default function Board(props) {

    const playerBoard = props.playerBoard;

    const gameState = useSelector((state) => state.gameReducer);
    const boardState = gameState.gameBoard[playerBoard];
    const playerTurn = gameState.playerTurn;


    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol = {boardState[i][j]} isPlayerBoard={playerBoard === PLAYER_BOARD} x = {i} y = {j} playerTurn = {playerTurn}/>);
        }
    }

    return (
        <div id="board" >
            {boardComponent}
        </div> 
    );
}