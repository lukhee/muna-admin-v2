import React from 'react';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 root: {},
 btn: {
   color: 'black',
   cursor: 'pointer'
 }
}))

export default function Tooltips({title, children}) {
  let updateTitle = ''
  title.forEach(data => {
    updateTitle = updateTitle.concat(data.name).concat(' ')
  });
  const classes = useStyles()
  return (
    <> 
      <Tooltip TransitionComponent={Zoom} title={updateTitle}>
        <span className={classes.btn}>{children}</span>
      </Tooltip>
    </>
  );
}