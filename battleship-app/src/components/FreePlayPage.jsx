import React from 'react';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';

export default function FreePlayBoard() {
    return (
        <div>
            <ResetButton text="Reset game"/>
            <Board player="human"/>
        </div>
        
    );
}