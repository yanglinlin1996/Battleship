import React from 'react';
import { useSelector } from 'react-redux';
import { PLAYER_BOARD } from '../utils/Constants.js';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';
import Button from '@mui/material/Button';
import '../style/PlayPage.css';

export default function FreePlayBoard() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" color="inherit">Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" color="inherit">Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" color="inherit">Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" color="inherit">Play Rule</Button>
            </div>
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