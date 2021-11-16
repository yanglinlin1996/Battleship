import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';

export default function Square(props) {

    const { symbol, playerBoard, playerTurn, x, y } = props;
    let bgColor = "defaultBg";

    if (symbol === 'X') {
        bgColor = "redBg";
    } else if (symbol === "V") {
        bgColor = "greenBg";
    } 

    const dispatch = useDispatch();

    return (<div onClick={
            () => {
                dispatch({
                    type: "HUMAN_CLICK",
                    x: x,
                    y: y,
                    playerBoard: playerBoard,
                    // boardState: boardState,
                    playerTurn: playerTurn
                });
                setTimeout(() => {
                    dispatch({
                        type: "AI_CLICK",
                        x: x,
                        y: y,
                        playerBoard: playerBoard,
                        // boardState: boardState,
                        playerTurn: playerTurn
                    })
                }, 1000);}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>);
}