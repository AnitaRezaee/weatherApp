import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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

type SearchBarProps = {
  city: string;
  handleCityChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
  setWeatherContent: () => void;
};
export const SearchBar: React.FC<SearchBarProps> = ({
  city,
  handleCityChange,
  setWeatherContent,
}: SearchBarProps) => {
  const classes = useStyles();

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
        onClick={setWeatherContent}
        variant="contained"
      >
        Set
      </Button>
    </div>
  );
};

export default SearchBar;
