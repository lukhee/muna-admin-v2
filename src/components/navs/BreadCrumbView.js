import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Divider , Hidden} from '@material-ui/core';
import BreadCrumbs from '../UiElements/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
  root: {},
    topNav: {
      width: '100%',
      padding: theme.spacing(3, 2),
      background: theme.palette.background.default,
      display: 'flex',
      '& nav': {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1.5),
      }
    },
    divider: {
      margin: theme.spacing(2, 1)
    },
}));

const BreadCrumbContainer = ({heading, match, history}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}> 
      <div className={classes.topNav}>
        {
          heading && ( 
            <h1>
              {heading}
            </h1>
          )
        }
        
        <Hidden mdDown>
          <BreadCrumbs match={match} history={history}/>
        </Hidden>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default BreadCrumbContainer;