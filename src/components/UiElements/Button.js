import React from "react";
import { Button as UIButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: 0,
      textTransform: 'capitalize',
    },
  }));

const Button = ({ children, variant, color, size, ...rest }) => {
    const classes = useStyles()
  return (
    <UIButton className={classes.button} variant={variant} color={color} size={size} {...rest}>
      {children}
    </UIButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "secondary",
  size: "medium",
};

export default Button;
