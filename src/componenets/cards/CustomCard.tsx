import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type CustomCardProps = {
  child?: React.ReactNode;
};

export const CustomCard: React.FC<CustomCardProps> = ({
  child,
}: CustomCardProps) => {
  return <Card>{child}</Card>;
};

export default CustomCard;
