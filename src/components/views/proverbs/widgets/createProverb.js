import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Grid } from "@material-ui/core";
import { UiTextField, Button } from "../../../UiElements";
import {formValidation} from "../../../helperFunction";

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

const categoryData = [
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
    margin: theme.spacing(2,0),
    width: "100%",
  },
}));

const CreateProverb = ({CreateProverbAction, history}) => {
  const [formData, setForm] = useState({
    content: "",
    language: "",
    category: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    proverbError: '',
    languageError: '',
    category: '',
  })
  const { content, language, category } = formData;

  const handleChange = (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const error = formValidation(formData);
    if(error) return setValidationErrors()
    CreateProverbAction(formData, history)
  };

  const classes = useStyles();

  return (
    <form onSubmit={submitForm}>
      <UiTextField
        className={classes.selectField}
        label="Your Proverb"
        onChange={handleChange}
        value={content}
        error = {false}
        multiline
        fullWidth
        rows={3}
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
              label="Your Language"
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
        <Grid item xs={12} md={6}>
          <FormControl className={classes.selectField}>
            <UiTextField
              id="category"
              name="category"
              select
              size='small'
              label="Your Category"
              value={category}
              onChange={handleChange}
              helperText="Please select category"
              variant="outlined"
            >
              {categoryData.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </UiTextField>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" className={classes.selectField}>
        Submit
      </Button>
    </form>
  );
};

export default CreateProverb;
