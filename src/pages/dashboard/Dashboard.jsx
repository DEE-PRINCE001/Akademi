import React, { useContext } from 'react'
import SearchBox from '../../components/inputs/SearchBox'
import CircularIcon from '../../components/labels/CircularIcon'
import student from '../../assets/icons/studentwhite.svg'
import teacher from '../../assets/icons/teacherwhite.svg'
import event from '../../assets/icons/eventwhite.svg'
import food from '../../assets/icons/foodwhite.svg'
import { ForkKnife, Mail, Menu, Plus } from 'lucide-react'
import { NavContext } from '../../contexts/NavContext'
import SchoolPerformance from './SchoolPerformance'
import UnpaidStudentRow from './UnpaidStudentRow'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import StudentRow from './StudentRow'
import Button from '../../components/labels/Button'
import MessageRow from './MessageRow'
import FoodMenu from './FoodMenu'
import { SchoolCalendar } from './SchoolCalendar'
import { SchoolFinanceChart } from './SchoolFinance'

const Dashboard = () => {

  const { sideBarOpened,
    setSideBarOpened,
    profileOpened,
    setProfileOpened } = useContext(NavContext);

  const marchEvents = {
    "2021-03-05": { bgHighlight: true },
    "2021-03-08": { status: "primary" },
    "2021-03-20": { status: "accent" },
    "2021-03-23": { status: "secondary" }
  };

  const analyticsData = [
    {
      title: "Students",
      value: "932",
      icon: student,
      variant: "primary"

    },
    {
      title: "Teachers",
      value: "754",
      icon: teacher,
      variant: "secondary"
    },
    {
      title: "Events",
      value: "40",
      icon: event,
      variant: "accent"
    },
    {
      title: "Foods",
      value: "32k",
      icon: event,
      variant: "primarydeep"
    }

  ]

  const spdata = [

    {
      month: "Jan", thisWeek: 20, lastWeek: 30
    },
    {
      month: "Feb", thisWeek: 45, lastWeek: 40
    },
    {
      month: "Mar", thisWeek: 85, lastWeek: 50
    },
    {
      month: "Apr", thisWeek: 40, lastWeek: 20
    },
    {
      month: "May", thisWeek: 15, lastWeek: 45
    },
    {
      month: "Jun", thisWeek: 35, lastWeek: 46
    },
    {
      month: "Jul", thisWeek: 35, lastWeek: 20
    },
    {
      month: "Aug", thisWeek: 35, lastWeek: 80
    },
    {
      month: "Sep", thisWeek: 79, lastWeek: 29
    },
    {
      month: "Oct", thisWeek: 56, lastWeek: 20
    },
    {
      month: "Nov", thisWeek: 10, lastWeek: 10
    },
    {
      month: "Dec", thisWeek: 40, lastWeek: 50
    }
  ]
  return (
    // <div className={`flex-1 lg:flex m-0 w-auto`} >
    <div className={`flex-1 lg:flex min-w-0 h-full`} >
      <div className='relative flex-1 min-w-0 flex flex-col w-full px-2 md:p-8 md:pt-0 
            pb-0 h-screen space-y-5 overflow-y-auto scrollbar-none'>
        <div className='pt-3 md:pt-7 md:pb-3 sticky top-0 w-full flex-1 min-w-0 bg-background/50 backdrop-blur-xl z-1'>

          {/* The Header */}
          <GeneralHeader title={"Dashboard"} searchBox />
        </div>
      

        {/* the body */}
        {/* <div className='p-5 xl:p-7 rounded-xl bg-white'> */}

        <div className='grid grid-cols-2 
                xl:grid-cols-4 w-full justify-between gap-y-4 xl:gap-y-0 p-5 xl:p-9 rounded-xl bg-white'>
          {analyticsData.map((x) =>
            <div key={x.title} className='flex items-center space-x-2 lg:space-x-4 justify-start xl:justify-center'>
              <CircularIcon variant={x.variant} size="lg" icon={<img src={x.icon} className='text-white h-6 w-6' />} />
              <div className='flex flex-col space-y-2'>
                <span className='text-sm text-grey-200 leading-none'>{x.title}</span>
                <span className='text-2xl leading-none font-bold text-primary-text'>{x.value}</span>
              </div>
            </div>)}

        </div>


        {/* the school performance */}
        <div className='w-full min-w-0'>
          <div className='overflow-x-auto scrollbar-thin'>
            <div className='min-w-150'>
              <SchoolPerformance spdata={spdata} />
            </div>
          </div>

        </div>


        {/* Calenndar and finance */}
        <div className='flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5 w-full text-primary-text'>
          <div className='flex flex-col bg-white w-full h-90 rounded-lg overflow-x-auto overflow-y-hidden'>
            {/* <div className='flex justify-between'>
              <h1 className='text-primary-text text-lg font-bold'>School Calendar</h1>
              <p>Last week</p>
            </div>
            <div> */}
            <SchoolCalendar highlightedDays={marchEvents} />
            {/* </div> */}

          </div>


          <div className='flex flex-col bg-white w-full h-90 rounded-lg overflow-x-auto'>
            {/* <div className='flex justify-between'>
              <h1 className='text-primary-text text-lg font-bold'>School Finance</h1>
              <p className=''>Last week</p>
            </div>
            <div> */}
            <SchoolFinanceChart />
            {/* </div> */}

          </div>



        </div>

        {/* Unpaid Student Intuition */}
        <div className='bg-white rounded-lg max-w-full min-w-0 '>
          <div className='overflow-auto'>

            <div className='flex flex-col space-y-7 overflow-auto scrollbar-thin min-w-150 w-full p-5'>
              <div className='flex justify-start'>
                <h1 className='text-primary-text text-lg font-bold'>Unpaid Student Intuition</h1>
              </div>


              <UnpaidStudentRow printer />
              <UnpaidStudentRow printer />
              <UnpaidStudentRow printer />
              <UnpaidStudentRow printer />
              <UnpaidStudentRow printer />



              <div></div>

            </div>
          </div>
        </div>

      </div>

      {/* </div> */}

      {/* the rightbar */}
      <div className='relative hidden bg-white h-full lg:flex flex-col justify-between'>
        <div className='sticky top-0 bg-transparent backdrop-blur-xl h-60'></div>

        <div className='hidden relative lg:flex flex-col w-70 p-6
            space-y-10 3xl:w-85 overflow-y-auto scrollbar-none z-1'>
          {/* <div className='flex flex-col space-y-8'> */}
          <div className='flex flex-col space-y-5'>
            <div className='flex justify-between'>
              <div className='flex-col justify-between'>
                <h1 className='font-bold text-primary-text text-lg pb-1'>Recent Students</h1>
                <p className='text-xs text-grey-200'>You have <span className='text-grey-300 font-semibold'>450</span> students </p>
              </div>

              <CircularIcon size='xm' icon={<Plus size={15} strokeWidth={4} className="text-white" />} />
            </div>

            {[{}, {}, {}, {}, {}].map((x) =>
              <StudentRow name={"Samantha Williams"} grade={"VII B"} />
            )}
            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
          </div>
          {/* </div> */}

          {/* Messages */}
          <div className='flex flex-col space-y-5'>
            <h1 className='font-bold text-primary-text text-lg'>Messages</h1>
            <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} />
            <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} />
            <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} />
            <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} />
            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
          </div>

          {/* Food menu */}
          <div className='flex flex-col space-y-7'>
            <h1 className='font-bold text-primary-text text-lg'>Current Foods Menu</h1>
            <FoodMenu />
            <FoodMenu />
            <FoodMenu />
            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard