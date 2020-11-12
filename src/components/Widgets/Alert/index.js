import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, Box } from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  alert: {
    borderRadius: theme.spacing(1),
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    background: theme.palette.background.paper,
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  },
  symbol: {
    height: "100%",
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    color: theme.palette.background.default,
  },
  successColor: {
    background: theme.palette.primary.main,
  },
  failureColor: {
    background: theme.palette.secondary.main,
  },
}));

const Alert = ({ alert }) => {
  const classes = useStyles();
  return (
    alert !== null && (
      <div className={classes.root}>
        <Box className={classes.alert} boxShadow={2} display="flex">
          <Box
            className={clsx(
              classes.symbol,
              alert.successType ? classes.successColor : classes.failureColor
            )}
          >
            {alert.successType ? <DoneAllIcon /> : <ClearIcon />}
          </Box>
          <Box my="auto" p={1}>{alert.alertMsg}</Box>
        </Box>
      </div>
    )
  );
};

Alert.defaultProps = {
  // alert.successType: true
}

Alert.propTypes = {
  alert: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);
