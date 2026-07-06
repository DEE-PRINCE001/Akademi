import React, { useContext } from 'react'
import Button from '../labels/Button'
import CircularIcon from '../labels/CircularIcon'
import { Menu, Plus } from 'lucide-react'
import SearchBox from '../inputs/SearchBox'
import { useNavigate } from 'react-router-dom'
import { NavContext } from '../../contexts/NavContext'


const SpecialSearchLayout = ({righButtonText}) => {
      const { sideBarOpened,
        setSideBarOpened,
        profileOpened,
        setProfileOpened } = useContext(NavContext);
    
        const navigate = useNavigate();
    return (
        <div className='flex flex-col-reverse md:flex-row gap-y-3 md:gap-y-0 items-center md:justify-between'>
            <CircularIcon icon={<Menu size={40} />} className="hidden md:flex xl:hidden text-primary mr-5 cursor-pointer" onClick={() => setSideBarOpened(!sideBarOpened)} />
            <SearchBox size="mb" />
            <div className='flex justify-between w-full md:justify-end'>

                <CircularIcon icon={<Menu size={40} />} className="md:hidden text-primary cursor-pointer" onClick={() => setSideBarOpened(!sideBarOpened)} />
                <div className='flex space-x-2'>
                    <Button rightIcon={<div className='w-0 h-0 border-l-6 border-r-6 border-t-8 
                border-l-transparent border-r-transparent border-t-primary'></div>}
                        onClick={() => alert("Sort not implemented yet, Calm down")} />

                    <Button colors={"bg-primary border-primary text-white hover:bg-primary-text hover:border-primary-text"}
                        leftIcon={<Plus className='text-white' strokeWidth={5} size={15} />}
                        onClick={() => navigate("add")}
                    >{righButtonText || "New Student"}</Button>
                </div>
            </div>
        </div>
    )
}

export default SpecialSearchLayout