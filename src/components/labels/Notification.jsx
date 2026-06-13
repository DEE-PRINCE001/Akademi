import React from "react";
import CircularIcon from "./CircularIcon";

const Notification = ({ count, max = 99, ...props }) => {
  const displayCount = count > max ? `${max}+` : count;
  return (
    <CircularIcon variant="danger" size="sm" {...props}>
      {displayCount}
    </CircularIcon>
  );
};

export default Notification;
