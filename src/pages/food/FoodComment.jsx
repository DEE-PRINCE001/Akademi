import React from 'react'
import quote from '../../assets/icons/Quote.svg'
import CircularIcon from '../../components/labels/CircularIcon'

const FoodComment = ({name, time, comment}) => {
  return (
    <div className='rounded-xl w-full bg-white flex flex-col space-y-5 p-5 h-full justify-between'>
        <div className='flex flex-col space-y-2'>
            <img src={quote} alt="" className='h-5 w-5'/>
            <p className='text-xs text-grey-300'>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.</p>
        </div>

        <div className='flex space-x-2 items-center'>
            <CircularIcon/>
            <div className='flex flex-col'>
                <h2 className='font-bold text-primary-text text-[14px]'>{name || "Karen Hope"}</h2>
                <p className='text-xs text-grey-300'>{time? time + "days ago" : "5 days ago"}</p>

            </div>
        </div>

    </div>
  )
}

export default FoodComment