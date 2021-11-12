import React from "react";
import './style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board() {

    const winner = useSelector((state) => state.winner);
    //const {count, boardState} = useSelector((state) => state.attack);
    const boardState = useSelector((state) => state.attack);

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            // boardComponent.push((<Square symbol = {boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
            boardComponent.push(<Square symbol = {boardState[i][j]} x={i} y={j}/>);
        }
    }

    return (
        <div>
            <h3>{winner === 0 ? `The winner is you.` : ""}</h3>
            {/* <h1>{winner}</h1> */}
            <div id="board">
                {boardComponent}
            </div>
        </div>
        
    );
}