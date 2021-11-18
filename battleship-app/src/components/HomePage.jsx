import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import '../style/Home.css';
import { STYLE } from '../utils/Constants.js'; 

export default function Home() {
    return (
        <div className="homeContainer">
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" style={STYLE}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" style={STYLE}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" style={STYLE}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" style={STYLE}>Play Rule</Button>
            </div>
            <h1>Welcome to Battleship Game</h1>
            <div className="modeContainer">
                <h2>Please select game mode</h2>
                <div class="buttonContainer">
                    <Stack direction="row" spacing={10}>
                        <Button variant="contained" className="modeButton" href="/freeplay" style={{ fontSize: '2vh', backgroundColor: 'goldenrod' }}>Free Play</Button>
                        <Button variant="contained" className="modeButton" href="/normalplay" style={{ fontSize: '2vh', backgroundColor: 'goldenrod' }}>Normal Play</Button>
                    </Stack>
                </div>
                
            </div>
            <Link href="/rule" style={{ fontSize: '3vh', color: 'slateblue' }}>How to Play Battleship</Link>
        </div>
        
    )
}