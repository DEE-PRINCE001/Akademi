import React from 'react'

import Header from './Header';
import StudentRow from './StudentRow';
import CircularIcon from '../../components/labels/CircularIcon';
import SearchBox from '../../components/inputs/SearchBox';
import { Menu } from 'lucide-react';
import GeneralHeader from '../../components/Layout/GeneralHeader';

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
  return (
    <div className='flex-1 min-h-full w-auto m-0'>
            <GeneralHeader title={"Students"}/>
            <div className='max-w-full bg-white rounded-xl overflow-x-auto mt-20'>

            <Header selected={students.selected}/>
            {students.map((student) =>
              <StudentRow key={student.id} selected={student.selected} name={student.name} 
              studentId={student.studentId} city={student.city} date={student.date} 
              grade={student.grade} parentName={student.parent} />
          )}
            </div>
 </div>
  )
}

export default StudentPage
