import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/Square.css';

export default function Square(props) {

    const { symbol, boardState, x, y, player, winner } = props;
    let bgColor = "defaultBg";

    if (symbol === 'X') {
        bgColor = "redBg";
    } else if (symbol === "V") {
        bgColor = "greenBg";
    } 

    const dispatch = useDispatch();

    // function checkTurn(player, totalClicks, winner) {
    //     if (winner) return false;
    //     if (player === 'human') {
    //         return totalClicks % 2 === 0;
    //     } else {
    //         return totalClicks % 2 === 1;
    //     }
    // }

    function findWhoPlays(player) {
        if (player === "human") {
            return (
                <div onClick={
                    () => {dispatch({
                        type: "BOARD_CLICK",
                        x: x,
                        y: y,
                        symbol: symbol,
                        curPlayer: player
                    })}
                } id="square" class={bgColor}>
                    {symbol}
                    {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
                </div>
            );
        } else { // player is AI
            setTimeout(() => {
                dispatch({
                    type: "BOARD_CLICK",
                    boardState: boardState,
                    curPlayer: player
                })
            }, 300);
            return (
                <div id="square" class={bgColor}>
                    {symbol}
                </div>
            );
            // return (<div onClick={
            //     () => {dispatch({
            //         type: "AI_CLICK",
            //         boardState: boardState,
            //         isTurn: checkTurn(player, totalClicks, winner)
            //     })}
            // } id="square" class={bgColor}>
            //     {symbol}
            //     {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
            // </div>);
        }
    }

    return (<div onClick={
            () => {dispatch({
                type: "BOARD_CLICK",
                x: x,
                y: y,
                boardState: boardState,
                curPlayer: player
            })}
        } id="square" class={bgColor}>
            {symbol}
            {/* {player === "human" ? (symbol === "*" ? "" : symbol) : (symbol)} */}
        </div>);

    // findWhoPlays(player);
}