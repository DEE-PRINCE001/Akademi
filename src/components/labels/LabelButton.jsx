import React from "react";

const LabelButton = ({
  variant = 'secondary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold text-white rounded-xl text-center px-6 py-2 transition-all";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90",
    secondary: "bg-secondary hover:bg-secondary/90",
    accent: "bg-accent text-primary-text hover:bg-accent/90",
    danger: "bg-danger hover:bg-danger/90",
    success: "bg-success hover:bg-success/90"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};


export default LabelButton;