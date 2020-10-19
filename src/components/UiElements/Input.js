import React from 'react';
import { TextField, menuItem, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme)=> ({
    root: {

    }
}))

const Input = ({text}) => {
    const classes = useStyle()
    return (
        <div>
            Input
        </div>
    );
};

Input.defaultProps = {
    text: "text",
  };

export default Input;