import React, { useState } from 'react';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';

export default function FreePlayBoard() {
    const [winner, setWinner] = useState("");
    function checkWinner(winner) {
        setWinner(winner);
    }
    return (
        <div>
            <ResetButton text="Reset game"/>
            <div>{winner ? `${winner} wins!` : "" }</div>
            <Board playerBoard="humanBoard" checkWinner={checkWinner} />
        </div>
        
    );
}