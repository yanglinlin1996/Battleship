import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';


export default function ResetButton(props) {
    const {text} = props;

    const dispatch = useDispatch();

    return (
        <Button onClick = {
            () => dispatch({
                type: "RESET",
            })
        } variant="contained" className="resetButton" color="secondary" size="small">
            {text}
        </Button>
    );
}