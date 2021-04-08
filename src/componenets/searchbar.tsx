import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputAdornment, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(12.5),
  },
  button: {
    margin: theme.spacing(1.5),
  },
}));

export const SearchBar: React.FC = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const handleCityChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setCity(input.target.value);
  };

  const buttonSelectHandler = () => {};

  return (
    <div className={classes.row}>
      <TextField
        label="City"
        id="City"
        value={city}
        onChange={handleCityChange}
        margin="dense"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        className={classes.button}
        onClick={buttonSelectHandler}
        variant="contained"
      >
        Set
      </Button>
    </div>
  );
};

export default SearchBar;
