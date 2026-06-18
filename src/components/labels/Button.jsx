import React from 'react'

const Button = ({children, leftIcon, rightIcon, size, colors, className, ...props}) => {
  return (
    <div>
        <button className={`flex space-x-2 items-center justify-center border-2 
        ${colors || "hover:bg-primary/10 border-primary text-primary"} ${className} rounded-full 
        ${size || "p-2.5 w-38 text-sm"}`} {...props} >
            {leftIcon? leftIcon: ""}
            <p>{children || "Newest"}</p> 
            {rightIcon? rightIcon : ''
            // <div className='w-0 h-0 border-l-8 border-r-8 border-t-10 
            // border-l-transparent border-r-transparent border-t-primary'></div>
            }
          </button>
    </div>
  )
}

export default Button