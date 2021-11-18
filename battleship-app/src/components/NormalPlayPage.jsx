import React from 'react';
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import Board from './Board.jsx';
import Button from '@mui/material/Button';
import { AI_BOARD, PLAYER_BOARD, STYLE } from '../utils/Constants';


export default function NormalPlayPage() {
    const gameState = useSelector((state) => state.gameReducer);
    const winner = gameState.winner;
    const playerTurn = gameState.playerTurn;
    return (
        <div>
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" style={STYLE}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" style={STYLE}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" style={STYLE}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" style={STYLE}>Play Rule</Button>
            </div>
            <div class="buttonContainer">
                <ResetButton text="Reset game"/>
            </div>
            <h2 class="playerTurnBox">{playerTurn ? "Player's Turn" : "AI's Turn"}</h2>
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