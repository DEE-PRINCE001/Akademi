import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'
import { Mail } from 'lucide-react'


const StudentRow = ({name, grade}) => {
  return (
    <div className='flex justify-between'>
            <div className='flex space-x-2 '>
              <CircularIcon variant='empty' size='xm'/>
              <div className='flex flex-col justify-between'>
                <h4 className='font-semibold text-primary-text text-[11px]'>{name || "-"}</h4>
                <p className='text-grey-300 text-xs'>Class {grade || "VII A"}</p>
              </div>
            </div>

            <div className='w-9 h-9 rounded-full border border-grey-300 flex 
            justify-center items-center text-grey-300 hover:text-white hover:bg-primary'>
              <Mail className='text-inherit' size={18}/>
            </div>


          </div>

  )
}

export default StudentRow