import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "./icon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  contentData: {
    padding: theme.spacing(6.25, 3.75),
  },
  temp: {
    fontSize: "40px",
    margin: theme.spacing(1.25),
    marginTop: theme.spacing(3.75),
  },
  discp: {
    fontSize: "25px",
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
      <div>
        <div className={classes.temp}>
          {Math.round(temperature)}
          <span>&#8451;</span>
        </div>
        <div className={classes.discp}>{discription}</div>
      </div>
    </div>
  );
};

export default WeatherContent;
