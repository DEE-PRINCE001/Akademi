import React, { useContext } from 'react'

import CircularIcon from '../labels/CircularIcon';
import SearchBox from '../inputs/SearchBox';
import { ArrowLeft, Menu } from 'lucide-react';
import { NavContext } from '../../contexts/NavContext';
import { useNavigate } from 'react-router-dom';


const GeneralHeader = ({ title, searchBox = false, backButton = false, reducedWidth = false }) => {
  const navigate = useNavigate()

  const { sideBarOpened,
    setSideBarOpened,
    profileOpened,
    setProfileOpened } = useContext(NavContext);

  return (
    <>

      {/* The Header */}
      <div className='bg-background w-full'>

        <div className={`relative flex flex-col space-y-2 xl:flex-row justify-between xl:items-center w-full ${reducedWidth ? "xl:w-[72%]" : ""}`}>
          <h1 className='text-2xl text-primary-text pt-2 leading-none font-bold'>{title || "title not set"}</h1>

          {/* <CircularIcon variant={"primary"} children="A" className='absolute cursor-pointer text-white z-50 top-1 right-1 sm:hidden' 
                    onClick={() => setProfileOpened(!profileOpened)}/> */}

          {searchBox && <div className='flex justify-between space-x-5 items-center mt-5 mb-0 xl:hidden'>
            {backButton && <div className='cursor-pointer'>
              <CircularIcon variant='details' size='md' onClick={() => navigate(-1)}
                icon={<ArrowLeft size={20} className='text-inherit' />} />
            </div>}
            <CircularIcon icon={<Menu size={40} />} className="xl:hidden cursor-pointer" onClick={() => setSideBarOpened(!sideBarOpened)} />
            <SearchBox size="mb" />
          </div>}
          {searchBox && <SearchBox className="hidden xl:flex" />}
        </div>
      </div>
    </>
  )
}

export default GeneralHeader;