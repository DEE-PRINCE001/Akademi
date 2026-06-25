import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import Calendar from './Calendar'
import ScheduleCard from './ScheduleCard'
import Button from '../../components/labels/Button'


const EventPage = () => {
  return (
    <div className='flex-1 flex flex-col min-h-0 space-y-3 md:space-y-7 w-auto m-0'>
      <div className='md:w-[72%]'>
        <GeneralHeader title={"Events"} searchBox />
      </div>
      <div className='flex-1 md:min-h-0 min-w-0 flex h-full flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0 w-full'>

        <div className='flex-1 flex min-h-0 min-w-0 w-full md:w-[70%] rounded-md'>
          <Calendar />

        </div>
        
        <div className='w-[30%] rounded-lg flex flex-col space-y-4 min-h-0'>
          <div className='rounded-xl p-5 h-20 bg-white w-full'>
            <div className='text-primary-text text-lg font-bold pb-2 leading-none'>Schedule Details</div>
            <div className='text-[11px] text-grey-200'>Thursday, 10th April, 2021</div>

          </div>
          <div className='flex flex-col space-y-4 overflow-auto scrollbar-thin'>

            <ScheduleCard course={"Art"} topic={"Basic Art"} />
            <ScheduleCard topic={"HTML and CSS"} course={"Proramming"} />
            <ScheduleCard />
            <ScheduleCard />
            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
                          size={"w-full p-3 mt-2 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default EventPage