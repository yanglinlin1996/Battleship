import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import './style/Square.css';

export default function Square(props) {

    const {symbol, boardState, count, x, y} = props;
    const [bgColor, setBgColor] = useState("");

    if (symbol === '*') {
        setBgColor("redBg");
    } else if (symbol === "") {
        setBgColor("greenBg");
    } 

    const dispatch = useDispatch();

    return (
        <div onClick={
            () => {dispatch({
                type: 'boardClick',
                x: props.x,
                y: props.y,
                count: props.count,
            })}
        } id="square" class={bgColor}></div>
    );
}