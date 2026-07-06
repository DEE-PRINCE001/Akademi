import React, { useContext } from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import TeacherInfo from './TeacherInfo'
import Button from '../../components/labels/Button'
import { Menu, Plus } from 'lucide-react'
import SearchBox from '../../components/inputs/SearchBox'
import { NavContext } from '../../contexts/NavContext'
import CircularIcon from '../../components/labels/CircularIcon'
import rarrow from '../../assets/icons/arrow-right.svg'
import larrow from '../../assets/icons/arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import SpecialSearchLayout from '../../components/Layout/SpecialSearchLayout'
import { teachers } from './TeacherData'
import HeaderContainer from '../../components/Layout/HeaderContainer'




const TeacherPage = () => {
  const { sideBarOpened,
    setSideBarOpened,
    profileOpened,
    setProfileOpened } = useContext(NavContext);

  const navigate = useNavigate();

  return (
    <div className='flex-1 flex min-w-0 flex-col space-y-5 md:space-y-7 h-full w-auto m-0'>
      <HeaderContainer>
        <GeneralHeader title={"Teachers"} />
        <SpecialSearchLayout righButtonText={"New Teacher"} />
        
      </HeaderContainer>
      {/* <div className='flex  flex-col-reverse xl:flex-row gap-y-3 xl:gap-y-0 items-center xl:justify-between'>
        <CircularIcon icon={<Menu size={40} />} className="hidden md:flex xl:hidden text-primary mr-5" onClick={() => setSideBarOpened(!sideBarOpened)} />
        <SearchBox size="mb" />
        <div className='flex justify-between w-full xl:justify-end'>
          <CircularIcon icon={<Menu size={40} />} className="md:hidden text-primary" onClick={() => setSideBarOpened(!sideBarOpened)} />
          <div className='flex space-x-2'>
            <Button rightIcon={<div className='w-0 h-0 border-l-6 border-r-6 border-t-8 
            border-l-transparent border-r-transparent border-t-primary'></div>}
              onClick={() => alert("Sort not implemented yet, Calm down")} />

            <Button colors={"bg-primary border-primary text-white hover:bg-primary-text hover:border-primary-text"}
              leftIcon={<Plus className='text-white' strokeWidth={5} size={15} />}
              onClick={() => navigate("/add-teacher")}
            >New Teacher</Button>
          </div>
        </div>

      </div> */}

      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-2 overflow-y-auto scrollbar-none '>
        {teachers.map((x) => <TeacherInfo key={x.id} id={x.id} name={x.name} course={x.course} />)}
      </div>
      <div className='flex justify-between items-center w-full py-2'>
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

export default TeacherPage