import React from 'react';

export const InputLabel = ({ htmlFor, label, required }) => {
  if (!label) return null;
  
  return (
    <label 
      htmlFor={htmlFor} 
      className="block text-primary-text font-bold text-sm mb-2"
    >
      {label} {required && <span className="text-primary-text">*</span>}
    </label>
  );
};