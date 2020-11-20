import React, { useState } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar/index.js';
import TopBar from './TopBar';
import {authLogout} from '../../../Redux/Actions/auth/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    padding: theme.spacing(1),
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = ({children, authLogout, history}) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} logout={()=> authLogout(history)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {authLogout})(withRouter(DashboardLayout));
