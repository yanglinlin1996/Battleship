import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';
import { ACTION, ATTACK_SYMBOL, MISSED_SYMBOL, SHIP_SYMBOL } from '../utils/Constants';

export default function Square(props) {

    const { symbol, isPlayerBoard, playerTurn, x, y } = props;
    let bgColor = "defaultBg";

    if (symbol === ATTACK_SYMBOL) {
        bgColor = "redBg";
    } else if (symbol === MISSED_SYMBOL) {
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
                    })
                }, 1000);}
        } id="square" class={bgColor}>
            {isPlayerBoard ? (symbol === SHIP_SYMBOL ? "" : symbol) : (symbol)}
        </div>);
}