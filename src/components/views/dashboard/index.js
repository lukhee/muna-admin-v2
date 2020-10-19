import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Page from '../../general/Pages'

const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Page
        className={classes.root}
        title='dashboard'
        >
            <h1> DashBoard </h1>
        </Page>
    );
};

export default Dashboard;