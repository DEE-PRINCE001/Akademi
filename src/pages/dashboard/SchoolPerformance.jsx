import React from 'react'

import {Area, CartesianGrid, 
          Line, 
          LineChart, 
          ResponsiveContainer, 
          Tooltip, XAxis, 
          YAxis, AreaChart } from 'recharts';

const SchoolPerformance = ({spdata}) => {
  return (
    <div><div className='flex text-primary-text flex-col bg-white w-full h-80 rounded-lg p-5 overflow-auto'>
              <div className='flex justify-between'>
                <h1 className='text-primary-text text-lg font-bold'>School Performance</h1>
                <div className='flex text-xs space-x-6'>
                    <div className='relative flex flex-col space-y-0.5'>
                        <div className='absolute top-0.5 -left-3.5 rounded-full
                        w-2 h-2 bg-white border-2
                        border-accent'></div>
                        <div className='text-grey-300 text-[10px]'>This Week</div>
                        <div className='font-semibold text-primary-text text-sm'>1,235</div>
                    </div>
                    
                    <div className='relative flex flex-col space-y-0.5'>
                        <div className='absolute top-0.5 -left-3.5 rounded-full
                        w-2 h-2 bg-white border-2
                        border-secondary'></div>
                        <div className='text-grey-300 text-[10px]'>Last Week</div>
                        <div className='font-semibold text-primary-text text-sm'>1,356</div>
                        
                    </div>

                </div>
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
                      <stop offset={"5%"} stopColor='#FCC43E' stopOpacity={0.5}/>
                      <stop offset={"95%"} stopColor='#FCC43E' stopOpacity={0}/>

                    </linearGradient>
                    
                    <linearGradient id='redFill' x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                      <stop offset={"5%"} stopColor='#FB7D5B' stopOpacity={0.5}/>
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
            </div>
  )
}

export default SchoolPerformance