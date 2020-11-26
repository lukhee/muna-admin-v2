import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FormControl, MenuItem, Grid, Select, Chip, InputLabel, Input } from "@material-ui/core";
import { UiTextField, Button } from "../../../UiElements";
import {formValidation} from "../../../helperFunction";

const languageData = [
  {
    value: 1,
    label: "Hausa",
  },
  {
    value: 2,
    label: "Igbo",
  },
  {
    value: 3,
    label: "Yoruba",
  },
];

const categoryData = [
  {
    value: 1,
    label: "Advice",
  },
  {
    value: 2,
    label: "Instruction",
  },
  {
    value: 3,
    label: "Warning",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {},
  selectField: {
    margin: theme.spacing(2,0),
    width: "100%",
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateProverb = ({CreateProverbAction, history}) => {
  const [formData, setForm] = useState({
    content: "",
    ethnic: "",
    category: [],
    publish: false
  });
  const [setValidationErrors] = useState({
    proverbError: '',
    ethnicError: '',
    category: '',
  })
  const { content, ethnic, category } = formData;

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
    const newCategory = []
    category.filter(data=>{
      categoryData.forEach(value=>{
        if(value.label === data){
          newCategory.push(value.value)
        }
      })
    })
    const clonedData = {...formData}
    const newData = {...clonedData, category: newCategory}
    CreateProverbAction(newData)
  };

  const classes = useStyles();
  const theme = useTheme();

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
              id="ethnic"
              name="ethnic"
              select
              label="Ethnic"
              value={ethnic}
              onChange={handleChange}
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
            <InputLabel id="category">Categories</InputLabel>
            <Select
              labelId="category"
              id="category"
              name='category'
                 size='small'
              multiple
              value={category}
              onChange={handleChange}
              input={<Input id="category" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {categoryData.map((name) => (
                <MenuItem key={name.value} value={name.label} style={getStyles(name.label, category, theme)}>
                  {name.label}
                </MenuItem>
              ))}
            </Select>
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
