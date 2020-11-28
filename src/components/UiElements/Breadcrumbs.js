import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import {Breadcrumbs, Chip} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); 

export default function CustomizedBreadcrumbs({match, history}) {
  const path = match.path.substr(1);
  let paths = path.split('/');
  if (paths[paths.length - 1].indexOf(':') > -1) {
    paths = paths.filter((x) => x.indexOf(':') === -1);
  }

  const handleClick = (event, sub) => {
    event.preventDefault();
    const newPath = path.split(sub)[0] + sub;
    history.push(`/${newPath}`)
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {
        paths.map((sub, index)=>
          paths.length === index+1 && path.length === 0 ?
            ( 
              <StyledBreadcrumb
                key={index}
                icon={!sub && <HomeIcon fontSize="small" /> }
                clickable={false}
                label={sub ? sub : 'Home'}
              />
            ) :  ( 
              <StyledBreadcrumb
                key={index}
                label={sub}
                icon={index === 0 && <HomeIcon fontSize="small" /> }
                onClick={(e)=>handleClick(e, sub)}
              />
            )
        )}
    </Breadcrumbs>
  );
}