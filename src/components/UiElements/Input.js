import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const CssTextField = withStyles((theme) => ({
    root: {
      "& label.Mui-focused": {
        color: "green",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
          borderColor: "green",
        },
        "&.Mui-focused fieldset": {
          borderColor: "green",
        },
      },
    },
  }))(TextField);

const UiTextField = ({ size, children, ...rest}) => {
    return (
        <CssTextField size={size} {...rest}>
            {children}
        </CssTextField>
    );
};

UiTextField.defaultProps = {
    text: "text",
    size: 'small'
  };

export default UiTextField;