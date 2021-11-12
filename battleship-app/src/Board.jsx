import React from "react";
import './style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board() {

    //const winner = useSelector((state) => state.winner);
    const { count, boardState } = useSelector((state) => state.attack);

    const boardComponent = [];
    let winner = "";

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            // boardComponent.push((<Square symbol = {boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
            boardComponent.push(<Square symbol = {boardState[i][j]} boardState={boardState} count = {count} x={i} y={j}/>)
        }
    }

    return (
        <div>
            <h3>{count === 0 ? `The winner is ${winner}.` : ""}</h3>
            <div id="board">
                {boardComponent}
            </div>
        </div>
        
    );
}