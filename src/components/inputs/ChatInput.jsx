import React, { forwardRef, useState } from 'react';
import { Paperclip, Send } from 'lucide-react';


const ChatInput = forwardRef(({
  onSend,
  onAttachmentClick,
  placeholder = "Write your message...",
  disabled = false,
  className = '',
  value="",
  onChange,
  ...props
}, ref) => {
  const [text, setText] = useState("")
  const testChange = (e) => {
    
    setText(e.target.value);
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !disabled && onSend) {
      e.preventDefault();
      onSend();
    }
  };


  return (
    <div className={`
      flex items-center bg-white rounded-full pl-6 pr-1 py-1 w-full
      border border-grey-200 transition-all duration-200
      focus-within:ring-1 focus-within:ring-primary focus-within:border-primary
      ${disabled ? 'opacity-60 pointer-events-none' : ''}
      ${className}
    `}>
      {/* Input Text Field */}
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="
          flex-1 bg-transparent text-sm text-primary-text 
          placeholder:text-grey-300 focus:outline-none py-2 mr-3
        "
        {...props}
      />

      {/* Attachment / Paperclip Button */}
      {onAttachmentClick && (
        <button
          type="button"
          onClick={onAttachmentClick}
          disabled={disabled}
          className="
            text-grey-300 hover:text-primary transition-colors 
            p-2 mr-1 z-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20
          "
          title="Attach a file"
        >
          <Paperclip size={20} /> 
        </button>
      )}

      {/* Send Action Button */}
      <button
        type="button"
        onClick={onSend}
        disabled={disabled || !value?.trim()}
        
        className="
          bg-primary hover:bg-primary/90 disabled:bg-grey-200 disabled:text-grey-300
          text-white rounded-full px-5 py-2.5 flex items-center gap-x-2 
          text-sm font-bold transition-all duration-200 shrink-0 select-none
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        "
      >
        <span>Send</span>
        <Send size={16} strokeWidth={2.5} className='rotate-45' />
      </button>
    </div>
  );
});

ChatInput.displayName = 'ChatInput';

export default ChatInput;