import React, { forwardRef } from 'react';
import { InputLabel } from './InputLabel';

const TextInput = forwardRef(({ 
  label, 
  required = false, 
  className = '', 
  id, 
  error,
  ...props 
}, ref) => {
  // Generate a safe ID if none is provided
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  const borderClass = error 
    ? "border-danger focus:border-danger focus:ring-danger" 
    : "border-grey-300 focus:border-primary focus:ring-primary";

  return (
    <div className="w-full flex flex-col mb-4">
      <InputLabel htmlFor={inputId} label={label} required={required} />
      
      <input
        ref={ref}
        id={inputId}
        required={required}
        className={`
          w-full bg-white rounded-sm border px-2 py-2 text-sm text-primary-text 
          placeholder:text-grey-300 placeholder:text-xs focus:outline-none focus:ring-1 transition-all duration-200
          ${borderClass} ${className}
        `}
        {...props}
      />
      
      {error && <span className="text-xs text-danger mt-1">{error}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;