import { Mail, MoreHorizontal, PhoneCall } from 'lucide-react'
import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'

const TeacherInfo = ({ name = "Dimitris Vega", course = "Mathematics", img }) => {

  return (
    <div>


      <div className=' relative flex flex-col space-y-4 justify-center h-60 w-full p-5
        items-center rounded-lg bg-white'>
        <MoreHorizontal size={20} className='absolute top-5 right-5 text-grey-300 hover:text-primary' />
        <CircularIcon size='xl' variant='empty' />
        <div className='flex flex-col items-center space-y-1'>
          <div className='text-primary-text font-bold text-[18px]'>{name}</div>
          <div className='text-grey-300 text-sm'>{course}</div>
        </div>
        <div className='flex space-x-3 justify-center mt-2'>
          <CircularIcon size='sm' icon={<PhoneCall size={15} className='text-white' />} />
          <CircularIcon size='sm' icon={<Mail size={15} className='text-white' />} />
        </div>
      </div>
    </div>
  )
}

export default TeacherInfo