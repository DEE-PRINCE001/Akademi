import { Calendar, Clock } from 'lucide-react'
import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'

const ScheduleCard = ({color="primary", topic, course, date, time}) => {
  return (
    <div className='w-full rounded-xl bg-white pl-9 pr-5 flex flex-col space-y-2 justify-between relative h-30'>
        <div className={`h-full absolute left-0 w-4 bg-${color} rounded-l-xl`}></div>
        <div className='flex flex-col space-y-1 pt-3'>
            <div className='text-primary-text font-bold text-[14px] leading-none pb-0.5'>{topic || "Basic Algorithm"}</div>
            <p className='text-grey-200 text-xs'>{course || "Algorithm"}</p>
        </div>
        <div className='flex justify-between items-center pb-3'>
            <div className='flex flex-col space-y-1'>
                <div className='flex space-x-3 text-grey-200 items-center text-xs'>
                    <Calendar size={15} className='text-secondary'/>
                    <div>{date || "March 20,2021"}</div>
                </div>

                <div className='flex space-x-3 text-grey-200 items-center text-xs'>
                    <Clock size={15} className='text-accent'/>
                    <div>{time || "9:00 - 10:00AM"}</div>
                </div>
            </div>

            <CircularIcon variant='empty'/>

        </div>
    </div>
  )
}

export default ScheduleCard