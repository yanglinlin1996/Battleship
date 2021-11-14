import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board(props) {

    const player = props.player;

    // const winner = useSelector((state) => state.winner);
    //const {count, boardState} = useSelector((state) => state.attack);
    const state = useSelector((state) => state[player]);
    const attackedCount = state.attackedCount;
    const boardState = state.gameBoard;
    
    // if (player === "AI") {
    //     boardState = 
    // } else {
    //     boardState = useSelector((state) => state.player);
    // }
    const boardComponent = [];

    console.log("Current Board State is: " + boardState);

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            // boardComponent.push((<Square symbol = {boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
            boardComponent.push(<Square symbol = {boardState[i][j]} boardState = {boardState} x = {i} y = {j} player = {player}/>);
        }
    }

    return (
        <div>

            <h3>{attackedCount === 17 ? `The winner is ${player}.` : ""}</h3>
            {/* <h1>{winner}</h1> */}
            <div id="board">
                {boardComponent}
            </div>
        </div>
        
    );
}