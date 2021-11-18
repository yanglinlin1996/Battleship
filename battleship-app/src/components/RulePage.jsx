import React from 'react';
import Button from '@mui/material/Button';
import '../style/Rule.css';

export default function Rule() {
    return (
        <div>
            <div class="navbar">
                <Button variant="contained" className="navbarButton" href="/" color="inherit" style={{ fontSize: '2vh' }}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" color="inherit" style={{ fontSize: '2vh' }}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" color="inherit" style={{ fontSize: '2vh' }}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" color="inherit" style={{ fontSize: '2vh' }}>Play Rule</Button>
            </div>
            <div class="content">
                <h2>How to Play Battleships</h2>
                <p>
                This game of guessing, strategy and logical thought dates back to before world war one and is known the world over for being a simple game that can be played with no more than a pencil and two pieces of paper. It is a two player game which has since been released by many board game manufacturers and its popularity can be seen through not only the intricate detail now put into physical and digital renditions of it, but now also in a Hollywood film based on the game.
                </p>

                <h2>Start/Preparation</h2>
                <p>
                Each game can vary in the number of ships employed but a common practice is to have 5 ships of differing size (2 to 5) squares. There are one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship. Each player must secretly place their ships on a grid of ten columns by ten rows. These represent the location of the ships on a battlefield. Each player will also be in possession of a second grid of the same size. Where the first grid is their own ships, the second one (which is blank at the beginning of the game) is a mirror of their opponent’s battlefield.
                </p>

                <h2>In Play</h2>
                <p>Once it is determined who will go first, that person will pick a square at random, calling it by its reference of column reference, row number (C3 for example). This represents their firing a missile directly at that square. If the opposing player has any part of one of their ships positioned on this square they must call “hit” and mark on their battlefield (first grid) which part has been hit. Equally the attacking player will place an “X” on their blank grid (the mirror of their opponents field) to show a hit. In this instance the first player will now be allowed to make another guess. This continues until the attacking player misses.</p>
                <p>As soon as the attacking player misses, whether it is the first or fifth guess, the tables are turned and the second player may now start making guesses in exactly the same way.</p>
            
                <h2>Victory</h2>
                <p>The player who successfully locates all their opponent’s ships first by hitting each square they occupy is the winner as all ships have been destroyed.</p>
            </div>
        </div>
    )
}