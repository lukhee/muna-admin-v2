import React from "react";
import {connect} from 'react-redux'
import { makeStyles } from "@material-ui/core";
import ProverbContent from "./proverbContent";
import EditProverb from "./editProverb";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const PreviewProverb = ({proverbs: {activeProverb}}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EditProverb content={activeProverb} />
      <ProverbContent content={activeProverb} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  proverbs: state.proverbs,
});

export default connect(mapStateToProps) (PreviewProverb);
