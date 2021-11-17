import React from 'react';
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import Board from './Board.jsx';
import Stack from '@mui/material/Stack';
import { AI_BOARD, PLAYER_BOARD } from '../utils/Constants';


export default function NormalPlayPage() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <ResetButton text="Reset game"/>
            <div>{winner ? `Game over! ${winner} Won!` : "" }</div>
            <Stack direction="row" spacing={10}>
                <Board playerBoard={PLAYER_BOARD} />
                <Board playerBoard={AI_BOARD} />
            </Stack>
        </div>
    )
}