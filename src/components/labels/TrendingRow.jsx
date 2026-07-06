import React from 'react'
import trending from '../../assets/icons/trending.svg'
import CircularIcon from './CircularIcon'

const TrendingRow = ({id = "#12345678", date="2 March 2021, 13:45 PM", status="Complete", price="50,036", cols="3"}) => {
  return (
    <div className={`grid ${cols =="4"? "grid-cols-[1fr_0.6fr_0.6fr_0.4fr]" : "grid-cols-[1fr_0.6fr_0.4fr]"} gap-3 items-center`}>
        <div className='flex space-x-3'>
            <CircularIcon variant="danger" className='h-7! w-7! md:h-9! md:w-9! p-1! md:p-2!' icon={<img src={trending} className='h-7 w-7'/>}/>
            <div className='flex flex-col space-y-1 justify-center'>
                <div className='text-primary font-semibold text-xs md:text-sm'>{id}</div>
                {cols != "4" && <div className='text-[10px] text-grey-200'>{date}</div>}
            </div>
        </div>
        {cols == "4" && <div className='text-[10px] md:text-xs text-grey-300'>{date}</div>}
        <div className='font-semibold text-[10px] md:text-sm text-center text-primary-text'>
            {"$ " + price}
        </div>
        <div className={`font-semibold text-center text-[10px] md:text-sm ${status.toLowerCase() == "complete"? "text-success" : 
        status.toLowerCase() == "canceled"? "text-danger" : "text-grey-300" }`}>{status.charAt(0).toUpperCase() + status.substring(1).toLowerCase() }</div>

    </div>
  )
}

export default TrendingRow