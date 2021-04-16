import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "./icon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontWeight: "bold",
  },
}));
type weatherContentProps = {
  temperature: number;
  discription: string;
  icon: string;
};
export const WeatherContent: React.FC<weatherContentProps> = ({
  temperature,
  discription,
  icon,
}: weatherContentProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Icon icon={icon} discription={discription} />
      </div>
    </div>
  );
};

export default WeatherContent;
