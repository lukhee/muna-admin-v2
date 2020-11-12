import React, { useState } from "react";
import Proptypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Grid } from "@material-ui/core";
import { UiTextField, Button } from "../../../../UiElements";
import { formValidation } from "../../../../helperFunction";

const languageData = [
  {
    value: "yoruba",
    label: "Yoruba",
  },
  {
    value: "igbo",
    label: "Igbo",
  },
  {
    value: "hausa",
    label: "Hausa",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  selectField: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
}));

const UpdateForm = ({ createAction, updateType, proverbId }) => {
  const [formData, setForm] = useState({
    content: "",
    language: "",
    publish: false,
  });
  const [ setValidationErrors] = useState({
    proverbError: "",
    languageError: "",
    category: "",
  });
  const { content, language } = formData;

  const handleChange = (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }; 

  const submitForm = (event) => {
    event.preventDefault();
    const error = formValidation(formData);
    if (error) return setValidationErrors();
    createAction({formData});
  };

  const classes = useStyles();

  return (
    <form onSubmit={submitForm}>
      <UiTextField
        className={classes.selectField}
        label={updateType}
        onChange={handleChange}
        value={content}
        error={false}
        multiline
        fullWidth
        rows={2}
        rowsMax={4}
        variant="outlined"
        id="content"
        name="content"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl className={classes.selectField}>
            <UiTextField
              id="language"
              name="language"
              select
              label="Your Ethnic"
              value={language}
              onChange={handleChange}
              helperText="Please select language"
              variant="outlined"
            >
              {languageData.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </UiTextField>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" className={classes.selectField}>
        Create {updateType}
      </Button>
    </form>
  );
};


UpdateForm.proptype = {
  updateType : Proptypes.string.isRequired,
};

export default UpdateForm;
