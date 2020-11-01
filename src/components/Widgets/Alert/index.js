import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  alert: {
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(1),
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    background: theme.palette.background.paper,
    textTransform: 'uppercase',
    fontSize: '15px',
    fontWeight: 'bold',
    color: theme.palette.text.secondary
  },
  symbol: {
    height: "100%",
    width: "10px",
    background: theme.palette.secondary.main,
  },
  message: {
    height: "100%",
    width: "10px",
  },
}));

const Alert = ({ alert }) => {
  const classes = useStyles();
  return (
    alert !== null && (
      <div className={classes.root}>
        <Box className={classes.alert} boxShadow={2}>
          <Box className={classes.symbol}></Box>
          <span className={classes.message}>
              {alert.alertMsg}</span>
        </Box>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);
