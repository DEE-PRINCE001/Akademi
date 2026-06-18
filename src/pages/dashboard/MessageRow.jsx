import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'


const MessageRow = ({name, message="", time}) => {
  return (
    <div className='flex relative justify-start pt-1 pb-5 border-b border-grey-300'>
                <div className='flex space-x-3 '>
                  <CircularIcon variant='empty' size='xm'/>
                  <div className='flex flex-col justify-between'>
                    <h4 className='font-semibold text-primary-text text-[11px]'>{name || "-"}</h4>
                    <p className='text-grey-300 text-xs'>{message.substring(0, 23) + "..." } </p>
                  </div>
                </div>

               <p className='absolute right-0 top-0 text-grey-300 text-xs'>{time || "05:17PM"}</p>
    
              </div>
  )
}

export default MessageRow