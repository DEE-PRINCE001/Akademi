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

const students = [
  {
    id: 1,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII C",
    selected: false,
  },
  {
    id: 2,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A",
    selected: true,
  },
  {
    id: 3,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII B",
    selected: true,
  },
  {
    id: 4,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII C",
    selected: true,
  },
  {
    id: 5,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A",
    selected: true,
  },
  {
    id: 6,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A",
    selected: true,
  },
  {
    id: 7,
    name: "Samanta William",
    studentId: "#123456789",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A",
    selected: true,
  }
];


const StudentPage = () => {

  const { sideBarOpened,
    setSideBarOpened,
    profileOpened,
    setProfileOpened } = useContext(NavContext);
  return (
    <div className='flex-1 flex flex-col space-y-3 md:space-y-7 h-full overflow-auto w-auto m-0'>

      <GeneralHeader title={"Students"} />
      <div className='flex  flex-col-reverse md:flex-row gap-y-3 md:gap-y-0 items-center md:justify-between'>
        <SearchBox size="mb" />
        <div className='flex justify-between w-full md:justify-end'>

          <Menu size={40} className="md:hidden text-primary" onClick={() => setSideBarOpened(!sideBarOpened)} />
          <div className='flex space-x-2'>
            <Button rightIcon={<div className='w-0 h-0 border-l-6 border-r-6 border-t-8 
            border-l-transparent border-r-transparent border-t-primary'></div>}
              onClick={() => alert("Sort not implemented yet, Calm down")} />

            <Button colors={"bg-primary border-primary text-white hover:bg-primary-text hover:border-primary-text"}
              leftIcon={<Plus className='text-white' strokeWidth={5} size={15} />}
              onClick={() => alert("Cannot add new student yet, do with what you have")}
            >New Student</Button>
          </div>
        </div>
      </div>

      <div className='max-w-full bg-white rounded-xl overflow-x-auto scrollbar-thin'>
        <div className='w-'>

          <Header selected={students.selected} />
        </div>
        {students.map((student) =>
          <StudentRow key={student.id} selected={student.selected} name={student.name}
            studentId={student.studentId} city={student.city} date={student.date}
            grade={student.grade} parentName={student.parent} />
        )}
      </div>

      <div className='flex justify-between items-center w-full mb-4'>
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
  )
}

export default StudentPage
