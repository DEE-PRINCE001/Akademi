import React from "react";

const LabelLegend = ({ dotColor = 'success', label, ...props }) => {
  const dotClasses = "w-3 h-3 rounded-full mr-2";
  const labelClasses = "text-sm text-grey-300 font-medium";

  return (
    <div className="flex items-center" {...props}>
      <div className={`${dotClasses} bg-${dotColor}`}></div>
      <span className={labelClasses}>{label}</span>
    </div>
  );
};

export default LabelLegend;