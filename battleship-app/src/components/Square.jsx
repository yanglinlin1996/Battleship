import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';

export default function Square(props) {

    const { symbol, boardState, x, y, playerTurn } = props;
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
                    boardState: boardState,
                    playerTurn: playerTurn
                });
                setTimeout(() => {
                    dispatch({
                        type: "AI_CLICK",
                        x: x,
                        y: y,
                        boardState: boardState,
                        playerTurn: playerTurn
                    })
                }, 3000);}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>);
}