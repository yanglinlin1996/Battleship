import React from 'react';
import { useSelector } from 'react-redux';
import { PLAYER_BOARD } from '../utils/Constants.js';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';

export default function FreePlayBoard() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <ResetButton text="Reset game"/>
            <div>{winner ? `Game over! ${winner} Won!` : "" }</div>
            <Board playerBoard={PLAYER_BOARD} />
        </div>
        
    );
}