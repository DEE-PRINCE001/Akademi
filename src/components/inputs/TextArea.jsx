import React, { forwardRef, useState } from 'react';
import { InputLabel } from './InputLabel';


const TextArea = forwardRef(({ 
  label, 
  required = false, 
  maxLength,
  placeholder,
  className = '', 
  id, 
  onChange,
  error,
  ...props 
}, ref) => {
  // Initialize character count based on defaultValue or value
  const [charCount, setCharCount] = useState(
    props.defaultValue?.length || props.value?.length || 0
  );
  
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const borderClass = error 
    ? "border-danger focus:border-danger focus:ring-danger" 
    : "border-grey-300 focus:border-primary focus:ring-primary";

  const handleChange = (e) =>{ 
      setCharCount(e.target.value.length);
      if (onChange) {
      onChange(e); 
    }
}


  return (
    <div className="w-full flex flex-col mb-4">
      <InputLabel htmlFor={inputId} label={label} required={required} />
      
      <div className="relative">
        <textarea
          ref={ref}
          id={inputId}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={maxLength? handleChange : onChange}
          className={`
            w-full bg-white border rounded-sm px-4 py-3 text-xs text-primary-text 
            placeholder:text-grey-300 placeholder:text-[12px] focus:outline-none focus:ring-1 transition-all duration-200 
            min-h-[120px] resize-y
            ${borderClass} ${className}
          `}
          {...props}
        />
      </div>
      
      
      {maxLength && (
        <div className="text-right text-[10px] text-grey-300 mt-1">
          {charCount}/{maxLength}
        </div>
      )}
      
      {error && <span className="text-[10px] text-danger mt-1">{error}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;