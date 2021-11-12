import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/Square.css';

export default function Square(props) {

    // const {symbol, boardState, x, y} = props;
    const symbol = props.symbol;
    const boardState = useSelector((state) => state.attack);
    let bgColor = "defaultBg";

    if (symbol === '*') {
        bgColor = "redBg";
    } else if (symbol === "") {
        bgColor = "greenBg";
    } 

    const dispatch = useDispatch();

    return (
        <div onClick={
            () => {dispatch({
                type: 'boardClick',
                x: props.x,
                y: props.y,
                picked: boardState[props.x][props.y]
            })}
        } id="square" class={bgColor}>
            {symbol === "*" ? "" : symbol}
        </div>
    );
}