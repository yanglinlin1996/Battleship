import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { ACTION } from '../utils/Constants';


export default function ResetButton(props) {
    const {text} = props;

    const dispatch = useDispatch();

    return (
        <Button onClick = {
            () => dispatch({
                type: ACTION.RESET,
            })
        } variant="contained" size="large" style={{ backgroundColor: 'orange'}}>
            {text}
        </Button>
    );
}