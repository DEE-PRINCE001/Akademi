import React, { useContext } from 'react'

import CircularIcon from '../labels/CircularIcon';
import SearchBox from '../inputs/SearchBox';
import { Menu } from 'lucide-react';
import { NavContext } from '../../contexts/NavContext';



const GeneralHeader = ({title, searchBox=false}) => {

      const {sideBarOpened, 
                  setSideBarOpened, 
                  profileOpened, 
                  setProfileOpened} = useContext(NavContext);

  return (
    <>
    
                {/* The Header */}
                <div className={`relative flex flex-col space-y-2 xl:flex-row justify-between xl:items-center w-full`}>
                    <h1 className='text-2xl text-primary-text pt-2 leading-none font-bold'>{title || "title not set"}</h1>
    
                    {/* <CircularIcon variant={"primary"} children="A" className='absolute cursor-pointer text-white z-50 top-1 right-1 sm:hidden' 
                    onClick={() => setProfileOpened(!profileOpened)}/> */}
                    
                    {searchBox && <div className='flex justify-between space-x-5 items-center mt-5 mb-0 xl:hidden'>
                      <CircularIcon icon={<Menu size={40} />} className="xl:hidden cursor-pointer" onClick={() => setSideBarOpened(!sideBarOpened)}/>
                      <SearchBox size="mb"/> 
                      </div>}
                    {searchBox && <SearchBox className="hidden xl:flex"/>}
                </div>
    </>
  )
}

export default GeneralHeader;