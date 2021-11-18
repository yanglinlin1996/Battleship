import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import '../style/Home.css';

export default function Home() {
    return (
        <div className="homeContainer">
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" color="inherit" style={{ fontSize: '2vh' }}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" color="inherit" style={{ fontSize: '2vh' }}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" color="inherit" style={{ fontSize: '2vh' }}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" color="inherit" style={{ fontSize: '2vh' }}>Play Rule</Button>
            </div>
            <h1>Welcome to Battleship Game</h1>
            <div className="modeContainer">
                <h2>Please select game mode</h2>
                <div class="buttonContainer">
                    <Stack direction="row" spacing={10}>
                        <Button variant="contained" className="modeButton" href="/freeplay" style={{ fontSize: '2vh' }}>Free Play</Button>
                        <Button variant="contained" className="modeButton" href="/normalplay" style={{ fontSize: '2vh' }}>Normal Play</Button>
                    </Stack>
                </div>
                
            </div>
            <Link href="/rule" style={{ fontSize: '3vh' }}>How to Play Battleship</Link>
        </div>
        
    )
}