import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { makeStyles, Box } from "@material-ui/core";
import { Modal } from "../../UiElements";
import { ProverbTable } from "./widgets";
import Page from "../../general/Pages";
import { CreateProverb } from "./widgets";
import {
  FetchProverb,
  CreateProverbAction,
  DeleteProverb,
  ActivateProverb
} from "../../../Redux/Actions/ProverbActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  tableField: {
    background: theme.palette.background.paper,
    borderTop: "4px solid green",
    padding: theme.spacing(3, 2),
  },
  addProverbModal: {
    marginTop: theme.spacing(1),
    float: "right",
  },
  tableRoot: {},
  table: {
    marginTop: theme.spacing(1),
  },
}));

const Proverbs = ({
  history,
  FetchProverb,
  CreateProverbAction,
  DeleteProverb,
  ActivateProverb,
  proverbs: { loading, proverbs, ...rest },
}) => {
  useEffect(() => {
    FetchProverb();
  }, [FetchProverb]);
  const classes = useStyles();

  const publishHandler = (publish) => {
    console.log(publish);
  };

  const previewHandler = (id) => {
    // ActivateProverb(id, history)
  history.push(`/admin/proverbs/${id}`);
  };

  const deleteHandler = (id) => {
    DeleteProverb(id);
  };

  return (
    <Page className={classes.root} title="Proverbs">
      <Box className={classes.tableField}>
        <Box className={classes.addProverb}>
          <Modal modalTitle="Add Proverb">
            <CreateProverb
              classes={classes}
              CreateProverbAction={CreateProverbAction}
            />
          </Modal>
        </Box>
        <Box className={classes.table}>
          {loading ? (
            <h1> Loading... </h1>
          ) : (
            <ProverbTable
              proverbs={proverbs}
              publishHandler={(publish) => publishHandler(publish)}
              previewHandler={(id) => previewHandler(id)}
              deleteHandler={(id) => deleteHandler(id)}
            />
          )}
        </Box>
      </Box>
    </Page>
  );
};

ProverbTable.propTypes = {
  FetchProverb: PropTypes.func.isReqired,
  CreateProverbAction: PropTypes.func,
  proverbs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  proverbs: state.proverbs,
});

export default connect(mapStateToProps, {
  FetchProverb,
  CreateProverbAction,
  DeleteProverb,
  ActivateProverb
})(Proverbs);
 