import React from "react";
import PropTypes from "prop-types";
import { TextField, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

const Select = ({ options, ...rest }) => {
  const classes = useStyle();
  return (
    <div>
      <TextField
        // id="outlined-select-currency-native"
        select
        // label="Native select"
        // value={currency}
        onChange={handleChange}
        // helperText="Please select your currency"
        variant="outlined"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.object.isRequired,
};

export default Select;
