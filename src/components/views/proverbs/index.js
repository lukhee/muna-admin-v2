import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Modal } from "../../UiElements";
import { ProverbTable } from "./widgets";
import Page from "../../general/Pages";
import {CreateProverb} from './widgets'


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
  tableRoot:{
    
  },
  table: {
    marginTop: theme.spacing(1),
  },
}));

const Proverbs = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Proverbs">
      <Box className={classes.tableField}>
        <Box className={classes.addProverb}>
          <Modal modalTitle="Add Proverb">
            <CreateProverb classes= {classes}/>
          </Modal>
        </Box>
        <Box className={classes.table}>
          <ProverbTable/>
        </Box>
      </Box>
    </Page>
  );
};

export default Proverbs;
