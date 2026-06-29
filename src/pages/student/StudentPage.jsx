import React, { useContext } from 'react'

import Header from './Header';
import StudentRow from './StudentRow';
import CircularIcon from '../../components/labels/CircularIcon';
import SearchBox from '../../components/inputs/SearchBox';
import { Menu, Plus, Triangle } from 'lucide-react';
import GeneralHeader from '../../components/Layout/GeneralHeader';
import Button from '../../components/labels/Button';
import { NavContext } from '../../contexts/NavContext';
import larrow from '../../assets/icons/arrow-left.svg'
import rarrow from '../../assets/icons/arrow-right.svg'
import { useNavigate } from 'react-router-dom';
import SpecialSearchLayout from '../../components/Layout/SpecialSearchLayout';
import { students } from './StudentData'


const StudentPage = () => {
  const navigate = useNavigate()

  const { sideBarOpened,
    setSideBarOpened,
    profileOpened,
    setProfileOpened } = useContext(NavContext);
  return (
    <div className='flex-1 flex min-w-0 flex-col space-y-5 md:space-y-7 h-full w-auto m-0'>
      <div className='min-h-0 h-fit min-w-0'>

        <GeneralHeader title={"Students"} />
      </div>
      <div>

        <SpecialSearchLayout />
      </div>

      <div className='flex-1 flex flex-col min-h-0 max-w-full min-w-0 bg-white rounded-xl'>

        <div className='max-w-full min-h-0 min-w-0 bg-white rounded-xl overflow-x-auto scrollbar-thin'>

          <div className='min-h-0'>

            <div className='min-w-200'>

              <Header selected={students.selected} />

              {students.map((student) =>
                <StudentRow key={student.id} id={student.id} selected={student.selected} name={student.name}
                  studentId={student.studentId} city={student.city} date={student.date}
                  grade={student.grade} parentName={student.parent} />
              )}
            </div>

          </div>
        </div>

        <div className='flex justify-between items-center w-full my-4 px-5'>
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
  )
}

export default StudentPage
