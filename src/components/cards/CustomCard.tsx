import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 1, 0, 1),
    height: "max-content",
  },
}));

type CustomCardProps = {
  children?: React.ReactNode;
};

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
}: CustomCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
