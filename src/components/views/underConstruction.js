import React from 'react';
import { makeStyles, Box } from "@material-ui/core";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '& svg': {
      color: '#ffbc00;',
      fontSize: theme.spacing(6)
    }
  },
}));

const UnderConstruction = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <ReportProblemIcon/>
        <h1> Under Construction</h1>
      </Box>
    </div>
  );
};

export default UnderConstruction;