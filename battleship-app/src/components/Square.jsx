import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';

export default function Square(props) {

    const { symbol, boardState, x, y, player, totalClicks, winner } = props;
    let bgColor = "defaultBg";

    if (symbol === 'X') {
        bgColor = "redBg";
    } else if (symbol === "V") {
        bgColor = "greenBg";
    } 

    const dispatch = useDispatch();

    function whichPlayer(player) {
        if (player === "human") {
            return "HUMAN_CLICK";
        } else {
            return "AI_CLICK";
        }
    }

    function checkTurn(player, totalClicks, winner) {
        if (winner) return false;
        if (player === 'human') {
            return totalClicks % 2 === 0;
        } else {
            return totalClicks % 2 === 1;
        }
    }

    return (
        <div onClick={
            () => {dispatch({
                type: whichPlayer(player),
                x: x,
                y: y,
                isTurn: checkTurn(player, totalClicks, winner),
                picked: boardState[x][y]
            })}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>
    );
}