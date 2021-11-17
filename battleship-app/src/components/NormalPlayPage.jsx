import React from 'react';
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import Board from './Board.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AI_BOARD, PLAYER_BOARD } from '../utils/Constants';


export default function NormalPlayPage() {
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
                <Stack direction="row" spacing={10}>
                    <Board playerBoard={PLAYER_BOARD} />
                    <Board playerBoard={AI_BOARD} />
                </Stack>
            </div>
            
        </div>
    )
}