import React, { useState } from "react";
import { UiTextField, Button } from "../../../../UiElements";
import { formValidation } from "../../../../helperFunction";
import { FormControl, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const EditProverbForm = ({ cancelEdit, content, submit }) => {
  const [Error, setValidationErrors] = useState(false);

  const [formData, setForm] = useState({
    content: content.content,
    category: [content.category[0].id],
    ethnic: content.ethnic.id,
    publish: content.publish
  });

  const classes = useStyles();

  const handleChange = (event) => {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const error = formValidation(formData);
    if (error) return setValidationErrors(true);
    submit(formData, content.id)
  };
  return (
    <form onSubmit={onSubmit}>
      <UiTextField
        id="content"
        type="text"
        error={Error}
        name="content"
        fullWidth
        value={formData.content}
        onChange={handleChange}
        helperText={!Error ? "Edit proverb" : "feild can'/t be empty"}
        variant="outlined"
      />
      <FormControl className={classes.submitButton}>
        <Box display="flex" justifyContent="flex-end">
          <Box pr={1}>
            <Button type="submit" variant="outlined" onClick={cancelEdit}>
              Cancel
            </Button>
          </Box>
          <Button type="submit">Submit</Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default EditProverbForm;
