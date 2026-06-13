import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebardata } from './SidebarData'
import CircularIcon from '../labels/CircularIcon'
import { Bell, Menu, Settings, X } from 'lucide-react'
import event from '../../assets/icons/event.svg'
import { NavContext } from '../../contexts/NavContext'




const Sidebar = ({children}) => {
    const {sideBarOpened, 
            setSideBarOpened, 
            profileOpened, 
            setProfileOpened} = useContext(NavContext);

        const sideRef = useRef(null);

    useEffect(()=> {
        function handleEventOutsideRef(event){
            if (sideRef.current && !sideRef.current.contains(event.target)){
                setSideBarOpened(false);
            }
        }

        document.addEventListener("mousedown", handleEventOutsideRef);

        return () => {
            document.removeEventListener("mousedown", handleEventOutsideRef)
        }
    }, [])

  return (
    <div className='flex bg-background'>
        <div className={`absolute ${profileOpened? "flex" : "hidden"} top-4 right-4 md:right-10 md:top-8 md:flex items-center space-x-3`}>
            <CircularIcon variant={"neutral"} icon={<Bell className='text-inherit'/>}/>
            <CircularIcon variant={"neutral"} icon={<Settings size={20} className='text-inherit'/>}/>
            <div className='flex flex-col space-y-1 items-end'>
                <h1 className='text-primary-text text-[10px] font-bold'>Nabilla A.</h1>
                <p className='text-grey-300 text-[8px]'>Admin</p>

            </div>
            <CircularIcon variant={"empty"}/>

            </div>
        <div ref={sideRef} className={`min-h-screen ${sideBarOpened? "flex translate-0 absolute z-10" : "-translate-x-full absolute transition"} z-10 transition-all duration-400 md:static md:translate-x-0 md:flex md:w-70 3xl:w-85 bg-primary font-sans mt-0`}>
            <div className='flex flex-col p-8 w-full pr-0 space-y-2'>
                <div className="flex space-x-5 items-center mb-10">
                    <div className='bg-secondary text-white font-bold text-3xl 3xl:text-4xl 
                    p-0.5 w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl 3xl:rounded-2xl text-center'>A</div>
                    <h1 className='text-3xl 3xl:text-4xl text-white font-bold pr-4'>Akademi</h1>
                </div>

                {sidebardata.map((x) => 
                <NavLink to={x.to} className={({isActive}) => `px-5 py-2.5 w-full rounded-l-3xl ${isActive? "bg-white text-primary hover:text-blue-950" : "bg-primary text-background hover:bg-blue-950"}`}>
                    {({isActive}) => 
                        (<div className='flex space-x-5 justify-start items-center'>
                            <img src={isActive ? x.iconblue : x.icon} alt="teacher_icon" className='h-[25px] w-[30px]'/>
                            <p className='text-[14px] 3xl:text-[16px]'>{x.text}</p>
                        </div>
                    )}
                </NavLink>)}

            </div>
        </div>
        {children}
    </div>
  )
}

export default Sidebar