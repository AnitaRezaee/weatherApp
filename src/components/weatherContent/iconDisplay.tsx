import React from "react";

type IconDisplayProps = {
  discription: string;
};
export const IconDisplay: React.FC<IconDisplayProps> = ({
  discription,
}: IconDisplayProps) => {
  return <img src={discription} alt={discription} />;
};

export default IconDisplay;
