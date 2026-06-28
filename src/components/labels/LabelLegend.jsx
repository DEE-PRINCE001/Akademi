import React from "react";

const LabelLegend = ({ dotColor = 'success', label, ...props }) => {
  const dotClasses = "w-2 h-2 rounded-full mr-1";
  const labelClasses = "text-xs text-grey-300";

  return (
    <div className="flex items-center" {...props}>
      <div className={`${dotClasses} bg-${dotColor}`}></div>
      <span className={labelClasses}>{label}</span>
    </div>
  );
};

export default LabelLegend;