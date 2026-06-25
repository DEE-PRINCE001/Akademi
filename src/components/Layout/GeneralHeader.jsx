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
                <div className={`relative flex flex-col space-y-2 lg:flex-row justify-between lg:items-center w-full`}>
                    <h1 className='text-2xl text-primary-text font-bold'>{title || "title not set"}</h1>
    
                    <CircularIcon variant={"primary"} children="A" className='absolute text-white top-1 right-1 z-50 md:hidden' 
                    onClick={() => setProfileOpened(!profileOpened)}/>
                    
                    {searchBox && <div className='flex justify-center space-x-5 items-center mt-5 mb-0 lg:hidden'>
                      <Menu size={40} className="md:hidden" onClick={() => setSideBarOpened(!sideBarOpened)}/>
                      <SearchBox size="mb"/> 
                      </div>}
                    {searchBox && <SearchBox className="hidden lg:flex"/>}
                </div>
    </>
  )
}

export default GeneralHeader;