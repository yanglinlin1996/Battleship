import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';
import { ACTION } from '../utils/Constants';

export default function Square(props) {

    const { symbol, isPlayerBoard, playerTurn, x, y } = props;
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
                    type: ACTION.PLAYER_CLICK,
                    symbol: symbol,
                    x: x,
                    y: y,
                    isPlayerBoard: isPlayerBoard,
                    playerTurn: playerTurn
                });
                setTimeout(() => {
                    dispatch({
                        type: ACTION.AI_CLICK,
                        symbol: symbol,
                        x: x,
                        y: y,
                        isPlayerBoard: isPlayerBoard,
                        playerTurn: playerTurn
                    })
                }, 1);}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>);
}