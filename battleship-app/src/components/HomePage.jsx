import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import '../style/Home.css';

export default function Home() {
    return (
        <div className="homeContainer">
            <h1>Welcome to Battleship Game</h1>
            <div className="modeContainer">
                <h2>Please select game mode</h2>
                <Stack direction="row" spacing={4}>
                    <Button variant="contained" className="modeButton">Free Play</Button>
                    <Button variant="contained" className="modeButton">Normal Play</Button>
                </Stack>
            </div>
            <Link href="/rules">How to Play Battleship</Link>
        </div>
        
    )
}