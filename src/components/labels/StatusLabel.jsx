import React from "react";

const StatusLabel = ({ variant = 'pending', label, ...props }) => {
  const baseClasses = "font-medium text-sm";
  
  const variantClasses = {
    complete: "text-success",
    pending: "text-grey-300",
    canceled: "text-danger"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant] || ''}`} {...props}>
      {label}
    </span>
  );
};

export default StatusLabel;