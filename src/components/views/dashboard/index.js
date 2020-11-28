import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import BreadCrumbsNav from '../../navs/BreadCrumbView'
import Page from '../../general/Pages'

const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
  }));

const Dashboard = ({history, match}) => {
    const classes = useStyles();
    return (
        <Page
        className={classes.root}
        title='dashboard'
        >
          <BreadCrumbsNav heading='Dashboard' match={match} history={history}/>
        </Page>
    );
};

export default Dashboard;