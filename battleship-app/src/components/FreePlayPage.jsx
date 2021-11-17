import React from 'react';
import { useSelector } from 'react-redux';
import { PLAYER_BOARD } from '../utils/Constants.js';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';
import '../style/PlayPage.css';

export default function FreePlayBoard() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <div class="buttonContainer">
                <ResetButton text="Reset game"/>
            </div>
            <div class={winner? "winnerContainer" : null}>{winner ? `Game over! ${winner} Won!` : "" }</div>
            <div class="boardContainer">
                <Board playerBoard={PLAYER_BOARD} />
            </div>
        </div>
        
        
    );
}