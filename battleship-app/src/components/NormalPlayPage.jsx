import React, { useState } from 'react';
import ResetButton from './ResetButton';
import Board from './Board.jsx';
import Stack from '@mui/material/Stack';


export default function NormalPlayPage() {
    const [winner, setWinner] = useState("");
    function checkWinner(winner) {
        setWinner(winner);
    }
    return (
        <div>
            <ResetButton text="Reset game"/>
            <div>{winner ? `${winner} wins!` : "" }</div>
            <Stack direction="row" spacing={10}>
                <Board playerBoard="humanBoard" checkWinner={checkWinner}/>
                <Board playerBoard="AIBoard" checkWinner={checkWinner}/>
            </Stack>
        </div>
    )
}