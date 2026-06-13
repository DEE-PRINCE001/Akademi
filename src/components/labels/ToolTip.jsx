import React from 'react';

/**
 * A professional, accessible Tooltip component.
 * @param {string} title - The main, bolded metric or text (e.g., "42%", "$1,345")
 * @param {string} subtitle - The secondary context text (e.g., "982 Income")
 * @param {React.ReactNode} children - The element that triggers the tooltip on hover
 */
const Tooltip = ({ title, subtitle, children }) => {
  return (
    <div className="relative inline-flex flex-col items-center group cursor-pointer">
      {/* The trigger element */}
      {children}

      {/* Tooltip Container - Hidden by default, shown on hover */}
      <div className="absolute bottom-full mb-2 hidden flex-col items-center group-hover:flex animate-in fade-in zoom-in-95 duration-300">
        
        {/* Main Tooltip Body */}
        <div className="bg-primary flex flex-col items-center justify-center rounded-xl px-4 py-2 min-w-[100px] shadow-lg whitespace-nowrap">
          <span className="text-white font-bold text-lg leading-tight">
            {title}
          </span>
          {subtitle && (
            <span className="text-grey-200 text-xs font-medium leading-tight mt-0.5">
              {subtitle}
            </span>
          )}
        </div>

        <div className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-primary"></div>
      </div>
    </div>
  );
};

export default Tooltip;