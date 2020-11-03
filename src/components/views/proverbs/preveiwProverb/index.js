import React, { useEffect } from "react";
// import {withRouter} from 'react-dom'
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ProverbContent from "./proverbContent";
import EditProverb from "./editProverb";
import {
  UpdateProverbProp,
  CreateProverbProp,
  DeleteProverbProp,
  PublishProverbProp,
  ActivateProverb,
} from "../../../../Redux/Actions/ProverbActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const PreviewProverb = ({
  proverbs: { activeProverb},
  DeleteProverbProp,
  UpdateProverb,
  CreateProverbProp,
  ActivateProverb,
  match
}) => {
  let id = match.params.id
  useEffect(() => {
    ActivateProverb(id)
    console.log(id)
  }, [ActivateProverb, id]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <EditProverb content={activeProverb} />
      <ProverbContent
        content={activeProverb}
        publishHandler={PublishProverbProp}
        editHandler={UpdateProverb}
        deleteHandler={DeleteProverbProp}
        createActionHandler={CreateProverbProp}
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  proverbs: state.proverbs,
});

export default connect(mapStateToProps, {
  DeleteProverbProp,
  UpdateProverbProp,
  PublishProverbProp,
  CreateProverbProp,
  ActivateProverb,
})(PreviewProverb);
