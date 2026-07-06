import React from 'react'

const HeaderContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-5 md:space-y-7 
    min-h-0 min-w-0 sticky top-0 pt-4 pb-2 lg:pt-8 z-20 
    bg-background/70 backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  )
}

export default HeaderContainer