import React, { useState } from "react";
import { makeStyles, Grid, Typography, Paper, Box } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Button } from "../../../UiElements";
import { EditForm } from "./widget";

function ShowProverb({ ShowEdit, content = "loading ... " }) {
  return (
    <>
      <Typography variant="h3">
        <Box mb={1}>{content.content}</Box>
      </Typography>
      <Button onClick={ShowEdit} variant="outlined">
        Edit proverb
      </Button>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    "& svg": {
      width: "100%",
      fontSize: "4rem",
      color: theme.palette.text.secondary
    },
  },
  submitButton: {
    float: "right",
  },
  items: {
    padding: theme.spacing(2),
  },
}));

const EditProverb = ({ content }) => {
  const [edit, SetEdit] = useState(false);
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xm={12} sm={4} m="auto">
        <Paper className={classes.items}>
          <LibraryBooksIcon />
        </Paper>
      </Grid>
      {content && (
        <Grid item xm={12} sm={8}>
          <Paper className={classes.items}>
            {!edit ? (
              <ShowProverb ShowEdit={() => SetEdit(!edit)} content={content} />
            ) : (
              <EditForm cancelEdit={() => SetEdit(!edit)} content={content.content} />
            )}
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default EditProverb;
