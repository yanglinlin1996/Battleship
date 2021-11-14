import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';

export default function Square(props) {

    // const {symbol, boardState, x, y} = props;
    const { symbol, boardState, x, y, player} = props;
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

    return (
        <div onClick={
            () => {dispatch({
                type: whichPlayer(player),
                x: x,
                y: y,
                picked: boardState[x][y]
            })}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>
    );
}