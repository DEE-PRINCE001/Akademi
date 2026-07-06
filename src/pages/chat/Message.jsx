import React from 'react'

const Message = ({isLastMessage=false, type=1, message}) => {

    const outgoingStyle = "rounded-l-xl rounded-t-xl"
    const incomingStyle = "rounded-r-xl rounded-t-xl"
  return (

    <div className={`py-3 px-4 text-wrap overflow-wrap wrap-break-word
    ${isLastMessage? (type == 1? outgoingStyle : type == 2? incomingStyle :"" ) : "rounded-2xl"} 
    ${type == 1? "justify-self-end": ""}
    bg-primary-text text-white font-normal font-sans tracking-wider text-[12px] w-fit  max-w-[85%] md:max-w-[50%]`}>
        {message}
    </div>
  )
}

export default Message