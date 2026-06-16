import React from "react";
import getIcon from "../../util/GetIcon";

const CircularIcon = ({
  variant = 'primary', // 'primary', 'secondary', 'accent', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  icon = null,
  children, 
  as: Component = 'div', // 'div', 'button', 'a'
  className = '',
  ...props
}) => {
  const baseClasses = "rounded-full flex items-center justify-center font-bold transition-all";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90",
    secondary: "bg-secondary hover:bg-secondary/90",
    accent: "bg-accent text-primary hover:bg-accent/90",
    primarydeep: "bg-primary-text text-white hover:bg-primary-text/90",
    empty: "bg-grey-200 hover:bg-primary",
    neutral: "bg-white shadow shadow-[#BF156C0D] text-grey-300 hover:bg-primary hover:text-white",
  
    details: "bg-background text-primary"
  };

  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    xm: "w-9 h-9 text-xs",
    md: "w-10 h-10 text-base p-2",
    lg: "w-14 h-14 text-lg p-3"
  };

  const currentVariant = variantClasses[variant] || '';
  const accentTextOverride = (variant === 'accent' ? variantClasses._onAccent : '');

  return (
    <Component
      className={` ${baseClasses} ${currentVariant} ${accentTextOverride} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon ? (typeof icon === 'string' ? getIcon(icon) : icon) : children}
    </Component>
  );
};

export default CircularIcon;