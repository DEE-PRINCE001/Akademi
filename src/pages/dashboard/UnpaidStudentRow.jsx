import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon';
import { Mail, MoreHorizontal, Printer, User } from 'lucide-react';
import { Phone } from 'lucide-react';

const UnpaidStudentRow = ({ name, studentId, price, grade = "VII A" }) => {

  const handleClick = () => {
    alert("There is nothing to print or show yet");
  }
  return (
    <div>
      <div
        className={`
        relative
        w-full
        grid
        grid-cols-[2fr_1fr_1fr_1fr_0.6fr]
        items-center
        justify-between
        text-xs
        text-primary-text
        
    `}
      >
        {/* Name */}
        <div className="flex items-center space-x-5">
          <CircularIcon variant='empty' size='xm' />
          <span className="font-bold text-sm">
            {name || "Samanta Williams"}
          </span>
        </div>

        {/* Id */}
        <p className="font-semibold text-primary">
          {"ID " + (studentId || "1234567")}
        </p>

        {/* Class */}
        <div className='flex space-x-3'>
          <CircularIcon variant='secondary' size="xm"
            icon={<User size={20} className='text-white' />} />
          <div className='flex flex-col justify-between'>
            <div className='text-grey-300 text-xs'>Class</div>
            <div className='font-semibold text-[14px]'>{grade}</div>

          </div>
        </div>


        {/* Amount */}

        <div className="font-semibold text-sm">
          {"$ " + (price || "50,036")}
        </div>

        {/* Print and Action */}
        <div className='flex justify-between'>
          <CircularIcon variant='neutral' size='xm' as='button' onClick={handleClick} 
            icon={<Printer className='text-inherit' size={20} />}
          />
          <CircularIcon variant='neutral' size='xm' onClick={handleClick}
            icon={<MoreHorizontal className='text-inherit' size={20} />}
          />
          
        </div>



      </div>
    </div>
  )
}

export default UnpaidStudentRow;