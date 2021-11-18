import React from 'react';
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import Board from './Board.jsx';
import Button from '@mui/material/Button';
import { AI_BOARD, PLAYER_BOARD } from '../utils/Constants';


export default function NormalPlayPage() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" color="inherit" style={{ fontSize: '2vh' }}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" color="inherit" style={{ fontSize: '2vh' }}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" color="inherit" style={{ fontSize: '2vh' }}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" color="inherit" style={{ fontSize: '2vh' }}>Play Rule</Button>
            </div>
            <div class="buttonContainer">
                <ResetButton text="Reset game"/>
            </div>
            <div class={winner? "winnerContainer" : null}>{winner ? `Game over! ${winner} Won!` : "" }</div>
            <div class="boardContainer">
                <div class="player">
                    <Board playerBoard={PLAYER_BOARD} />
                    <h3>Enemy Board</h3>
                </div>
                <div class="player">
                    <Board playerBoard={AI_BOARD} />
                    <h3>Player Board</h3>
                </div>
            </div>
            
        </div>
    )
}