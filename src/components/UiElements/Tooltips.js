import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 root: {},
 btn: {
   color: 'black'
 }
}))

export default function Tooltips({title, children}) {
  const classes = useStyles()
  return (
    <>
      <Tooltip TransitionComponent={Zoom} title={'hello give take'}>
        <Button className={classes.btn}>{children}</Button>
      </Tooltip>
    </>
  );
}