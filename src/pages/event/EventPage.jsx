import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import Calendar from './Calendar'
import ScheduleCard from '../../components/Cards/ScheduleCard'
import Button from '../../components/labels/Button'
import HeaderContainer from '../../components/Layout/HeaderContainer'


const EventPage = () => {
  return (
    <div className='flex-1 flex flex-col min-h-0 space-y-3 md:space-y-7 w-auto m-0'>
      <HeaderContainer >
        <GeneralHeader title={"Events"} searchBox reducedWidth/>
      </HeaderContainer>

      <div className='flex-1 min-h-0 bg-background overflow-auto scrollbar-none
      flex h-full flex-col space-y-5 lg:flex-row lg:space-x-6 lg:space-y-0 '>

        <div className='flex-1 flex min-w-0 lg:w-[70%] min-h-fit lg:overflow-auto'>
          <div className='flex-1 flex lg:min-h-full w-full overflow-x-auto rounded-md'>
            <Calendar />

          </div>
        </div>

        <div className='w-full lg:w-[30%] xl:h-full rounded-lg flex flex-col'>
          <div className='rounded-xl p-5 h-20 bg-white w-full sm:w-[50%] lg:w-full mb-4'>
            <div className='text-primary-text text-lg font-bold pb-2 leading-none'>Schedule Details</div>
            <div className='text-[11px] text-grey-200'>Thursday, 10th April, 2021</div>

          </div>

          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1 overflow-auto scrollbar-thin'>
            {/* <div className='flex flex-col sm:flex-row sm:space-x-4 xl:flex-col space-y-4 overflow-auto scrollbar-thin'> */}

            <ScheduleCard course={"Art"} topic={"Basic Art"} />
            <ScheduleCard topic={"HTML and CSS"} course={"Proramming"} />
            <ScheduleCard />
            <ScheduleCard />

            <Button colors={"bg-button-grey text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 mt-2 font-semibold text-sm mb-4"} className={"flex cursor-pointer"}>View More</Button>
          </div>
          {/* <div className=' hidden w-full lg:hidden justify-center flex-1'>

            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-[100%] lg:w-full p-3 font-semibold text-sm mb-5"} className={"cursor-pointer"}>View More</Button>
          </div> */}
        </div>

      </div>

    </div>
  )
}

export default EventPage