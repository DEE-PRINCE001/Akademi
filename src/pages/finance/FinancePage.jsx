import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import teacher from '../../assets/icons/teacherwhite.svg'
import student from '../../assets/icons/studentwhite.svg'
import finance from '../../assets/icons/financewhite.svg'
import CircularIcon from '../../components/labels/CircularIcon'
import FinanceChart from './FinanceChart'
import UnpaidStudentRow from '../dashboard/UnpaidStudentRow'
import larrow from '../../assets/icons/arrow-left.svg'
import rarrow from '../../assets/icons/arrow-right.svg'

import StatCard from './StatCard'
import { SparkLine } from './SparkLine'
import TrendingRow from './TrendingRow'


const FinancePage = () => {
  const data = [
    {
      title: "Total Students",
      value: "932",
      icon: student,
      percentage: "+25",
      iconVariant: "primary"

    },
    {
      title: "Total Teachers",
      value: "430",
      icon: teacher,
      percentage: "-5",
      iconVariant: "secondary"

    }
  ]

  const fcdata = [

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
    <div className='flex-1 flex flex-col space-y-3 md:space-y-7 min-h-0 h-full m-0'>
      <div className='md:w-[72%]'>
        <GeneralHeader title={"Finance"} searchBox />
      </div>
      <div className='flex-1 flex flex-col space-y-3 md:space-y-7 overflow-auto scrollbar-none'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {data.map((x) => <StatCard title={x.title} value={x.value} percentage={x.percentage} iconVariant={x.iconVariant} icon={x.icon} />)}

          <div className='col-span-2 flex space-x-4 bg-white rounded-xl p-4 py-5 '>
            <div className='flex w-full items-center space-x-2 lg:space-x-4 justify-start xl:justify-center'>
              <CircularIcon size="lg" variant='accent' icon={<img src={finance} className='text-white h-6 w-6' />} />
              <div className='flex flex-col space-y-3 text-xs'>
                <span className='text-grey-300 text-sm leading-none'>School Balance</span>
                <span className='text-2xl leading-none font-bold text-primary-text'>$123,456</span>
                <span className={`font-semibold leading-none ${data[0].percentage[0] == "-" ? "text-danger" : "text-success"}`}> {data[0].percentage + "% "}
                  <span className='text-grey-300 font-normal leading-none'>than last month</span></span>
              </div>
            </div>

            <div className='w-full'>
              <SparkLine />
            </div>
          </div>
        </div>



        <FinanceChart fcdata={fcdata} />

        <div className='flex space-x-8 w-full'>
          <div className='flex flex-col space-y-7 bg-white rounded-xl p-5 w-[60%]'>
            <div className='flex justify-start'>
              <h1 className='text-primary-text text-lg font-bold'>Unpaid Student Intuition</h1>
            </div>
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <div className='flex justify-between items-center w-full'>
              <div className='text-grey-300 text-xs'>
                Showing <span className='text-primary font-semibold'>1-5</span> from <span className='text-primary font-semibold'>100</span> data
              </div>
              <div className='flex space-x-1 items-center'>
                <img src={larrow} alt="" className='w-3 h-3 mr-2' />
                <CircularIcon variant='emptyWithStroke' size='sm'>1</CircularIcon>
                <CircularIcon variant='emptyWithStroke' size='sm'>2</CircularIcon>
                <CircularIcon variant='emptyWithStroke' size='sm'>3</CircularIcon>
                <img src={rarrow} alt="" className='w-3 h-3 ml-2' />
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-between space-y-7 bg-white rounded-xl p-5 w-[40%]'>
            <div className='flex justify-start'>
              <h1 className='text-primary-text text-lg font-bold'>School Expense</h1>
            </div>
            <div className='flex flex-col space-y-5'>
            <TrendingRow />
            <TrendingRow status='pending' />
            <TrendingRow status='complete'/>
            <TrendingRow status='canceled'/>
            <TrendingRow status='complete'/>
            </div>
            <div className='flex justify-between items-center w-full'>
              <div className='text-grey-300 text-xs'>
                Showing <span className='text-primary font-semibold'>1-5</span> from <span className='text-primary font-semibold'>100</span> data
              </div>
              <div className='flex space-x-1 items-center'>
                <img src={larrow} alt="" className='w-3 h-3 mr-2' />
                <CircularIcon variant='emptyWithStroke' size='sm'>1</CircularIcon>
                <CircularIcon variant='emptyWithStroke' size='sm'>2</CircularIcon>
                <CircularIcon variant='emptyWithStroke' size='sm'>3</CircularIcon>
                <img src={rarrow} alt="" className='w-3 h-3 ml-2' />
              </div>
            </div>
          </div>



        </div>
      </div>


    </div>
  )
}

export default FinancePage