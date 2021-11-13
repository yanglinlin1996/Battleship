import React from 'react';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';
import Stack from '@mui/material/Stack';

export default function NormalPlayBoard() {
    return (
        <div>
            <ResetButton text="Reset game"/>
            <Stack direction="row" spacing={10}>
                <Board />
                <Board />
            </Stack>
            
        </div>
    );
}