import { Mail, MoreHorizontal, PhoneCall } from 'lucide-react'
import React, { useState } from 'react'
import CircularIcon from '../../components/labels/CircularIcon'
import { Link } from 'react-router-dom'


const TeacherInfo = ({id, name = "Dimitris Vega", course = "Mathematics", img }) => {
  const [optionOpened, setOptionOpened] = useState(false);

  return (
    <div>


      <div className=' relative flex flex-col space-y-4 justify-center h-60 w-full p-5
        items-center rounded-lg bg-white'>
        <MoreHorizontal size={20} onClick={() => setOptionOpened(!optionOpened)}
         className='absolute top-5 right-5 text-grey-300 cursor-pointer hover:text-primary' />
        <div className={`absolute text-primary right-12 cursor-pointer top-2 z-2 border border-grey-200 rounded-md px-4 text-xs hover:bg-gray-100 py-2 shadow-lg bg-gray-200 ${optionOpened ? "inline" : "hidden"}`}>
          <Link to={`/teachers/details/${id}`}>Details</Link>
        </div>
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