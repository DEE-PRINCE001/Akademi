import React, { useContext } from 'react'
import SearchBox from '../components/inputs/SearchBox'
import CircularIcon from '../components/labels/CircularIcon'
import student from '../assets/icons/student.svg'
import teacher from '../assets/icons/teacher.svg'
import event from '../assets/icons/event.svg'
import food from '../assets/icons/food.svg'
import { ForkKnife, Menu } from 'lucide-react'
import { NavContext } from '../contexts/NavContext'
import {Area, CartesianGrid, 
          Line, 
          LineChart, 
          ResponsiveContainer, 
          Tooltip, XAxis, 
          YAxis, AreaChart } from 'recharts';
          
const Dashboard = () => {

  const {sideBarOpened, 
              setSideBarOpened, 
              profileOpened, 
              setProfileOpened} = useContext(NavContext);

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
    <div className={`flex-1 lg:flex m-0 max-w-screen`} >
        <div className='flex-1 flex flex-col w-full p-3 md:p-8 pb-0 min-h-screen space-y-5'>
            {/* The Header */}
            <div className={`relative flex flex-col space-y-2 lg:flex-row justify-between lg:items-center w-full`}>
                <h1 className='text-2xl text-primary-text font-bold'>Dashboard</h1>

                <CircularIcon variant={"primary"} children="A" className='absolute text-white top-1 right-1 md:hidden' 
                onClick={() => setProfileOpened(!profileOpened)}/>
                
                <div className='flex justify-center space-x-5 items-center mt-5 mb-0 lg:hidden'>
                  <Menu size={40} className="md:hidden" onClick={() => setSideBarOpened(!sideBarOpened)}/>
                  <SearchBox size="mb"/> 
                  </div>
                <SearchBox className="hidden lg:flex"/>
            </div>

            {/* the body */}
            {/* <div className='p-5 xl:p-7 rounded-xl bg-white'> */}

            <div className='grid grid-cols-2 
                xl:grid-cols-4 w-full justify-between gap-y-4 xl:gap-y-0 p-5 xl:p-9 rounded-xl bg-white'>
              {analyticsData.map((x) => 
                <div className='flex items-center space-x-2 lg:space-x-4 justify-start xl:justify-center'>
                  <CircularIcon variant={x.variant} size="lg" icon={<img src={x.icon} className='text-white h-6 w-6'/>} />
                  <div className='flex flex-col space-y-2'>
                  <span className='text-sm text-grey-200 leading-none'>{x.title}</span>
                  <span className='text-2xl leading-none font-bold text-primary-text'>{x.value}</span>
                </div>
              </div>)} 

            </div>


            {/* the school performance */}

            <div className='flex text-primary-text flex-col bg-white w-full h-80 rounded-lg p-5 overflow-auto'>
              <div className='flex justify-between'>
                <h1 className='text-primary-text text-lg font-bold'>School Performance</h1>
                <p>Last week</p>
              </div>
              <ResponsiveContainer width="100%" height={"100%"}>
                <AreaChart data={spdata} margin={{
                  top: 10,
                  right: 10,
                  left: -15,
                  bottom:10,
                }}>
                  <defs>
                    <linearGradient id='yellowFill' x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                      <stop offset={"5%"} stopColor='#FCC43E' stopOpacity={0.3}/>
                      <stop offset={"95%"} stopColor='#FCC43E' stopOpacity={0}/>

                    </linearGradient>
                    
                    <linearGradient id='redFill' x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                      <stop offset={"5%"} stopColor='#FB7D5B' stopOpacity={0.3}/>
                      <stop offset={"95%"} stopColor='#FB7D5B' stopOpacity={0}/>

                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={true}
                        horizontal={false}
                        stroke='#E5E7EB' />
                  <XAxis dataKey={'month'}
                          axisLine={false}
                          tickLine={false} 
                          tickMargin={15}
                          tick={({
                            fontSize: 14,
                            fill: "#A098AE",
                            fontWeight: 300,

                          })} />
                  <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickMargin={35}
                          tick={({
                            x, y, payload
                          }) => (
                            <text
                            x={x}
                            y={y}
                            dy={4}
                            textAnchor='start'
                            fill='#A098AE'
                            fontSize={14}
                            fontWeight={300}>{payload.value}</text>
                          )}/>


                  <Area dataKey={"thisWeek"} 
                  fill="url(#redFill)" stroke='none' type={"natural"} />
                  <Area dataKey={"lastWeek"} fill="url(#yellowFill)" stroke='none' type={"natural"} activeDot={false}/>

                  <Line type={'natural'}
                    dataKey={"thisWeek"}
                    stroke='#FB7D5B'
                    strokeWidth={4}
                    activeDot={{r: 6,
                      fill: "#FFF",
                      stroke: "#FB7D5B",
                      strokeWidth: 6
                    }}
                    dot={false}
                  />
                  <Line type={'natural'}
                    dataKey={"lastWeek"}
                    stroke='#FCC43E'
                    strokeWidth={4}
                    activeDot={false}
                    dot={false}
                  />

                  <Tooltip cursor={{
                    stroke: "#D1D5DB",
                    strokeWidth: 1,
                    strokeDasharray: "4 4"
                  }} 
                  
                  content={<></>}/>
                  
                </AreaChart>
              </ResponsiveContainer>

            </div>

            {/* Calenndar and finance */}
            <div className='flex space-x-5 w-full text-primary-text'>
              <div className='flex flex-col bg-white w-full h-70 rounded-lg p-5 overflow-auto'>
                <div className='flex justify-between'>
                  <h1 className='text-primary-text text-lg font-bold'>School Calendar</h1>
                  <p>Last week</p>
                </div>
                <div></div>

              </div>


              <div className='flex flex-col bg-white w-full h-70 rounded-lg p-5 overflow-auto'>
                <div className='flex justify-between'>
                  <h1 className='text-primary-text text-lg font-bold'>School Finance</h1>
                  <p className=''>Last week</p>
                </div>
                <div></div>

              </div>
              
              

            </div>
              
              {/* Unpaid Student Intuition */}
              <div className='flex flex-col space-y-5 bg-white w-full h-100 rounded-lg p-5 overflow-auto'>
                <div className='flex justify-between'>
                  <h1 className='text-primary-text text-lg font-bold'>Unpaid Student Intuition</h1>
                  <p className=''>Last week</p>
                </div>
                <div></div>

              </div>

        </div>

        {/* </div> */}

        {/* the rightbar */}
        <div className='hidden lg:flex flex-col w-70 3xl:w-85 bg-white min-h-screen'>

        </div>
    </div>
  )
}

export default Dashboard