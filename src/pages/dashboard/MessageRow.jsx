import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'


const MessageRow = ({ name, message = "", time, notification, softborder, profile}) => {
  return (
    <div className={`flex relative justify-start pt-1 border-b ${softborder ? "border-grey-200/10 pb-2" : "border-grey-300 pb-5"}`}>
      <div className='flex space-x-3 justify-center flex-1'>
        <CircularIcon variant={profile || "empty"} size='xm' />
        <div className='flex flex-1 flex-col space-y-1 justify-between'>
          <h4 className='font-semibold text-primary-text text-[12px]'>{name || "-"}</h4>
          <div className='flex flex-1 justify-between'>
            <p className='text-grey-300 text-xs'>{message.substring(0, 23) + "..."} </p>
            {notification &&
              <div className='w-4 h-4 rounded-full bg-secondary p-px text-white text-[10px] text-center'>{notification}</div>}
          </div>
        </div>
      </div>

      <p className='absolute right-0 top-0 text-grey-300 text-[10px]'>{time || "05:17PM"}</p>

    </div>
  )
}

export default MessageRow