import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebardata } from './SidebarData'
import CircularIcon from '../labels/CircularIcon'
import { ArrowLeft, Bell, CrossIcon, Menu, Settings, X } from 'lucide-react'
import event from '../../assets/icons/event.svg'
import { NavContext } from '../../contexts/NavContext'




const Sidebar = ({ children, doublescreen = false }) => {
    const { sideBarOpened,
        setSideBarOpened,
        profileOpened,
        setProfileOpened } = useContext(NavContext);

    const sideRef = useRef(null);

    useEffect(() => {
        function handleEventOutsideRef(event) {
            if (sideRef.current && !sideRef.current.contains(event.target)) {
                setSideBarOpened(false);
            }
        }

        document.addEventListener("mousedown", handleEventOutsideRef);

        return () => {
            document.removeEventListener("mousedown", handleEventOutsideRef)
        }
    }, [])

    return (
        <div className='flex min-h-0 bg-background w-full h-full relative'>
            <div className={`fixed top-4.5 right-3 md:right-8 lg:top-8 flex items-center space-x-4 z-40`}>
                <div className={`${profileOpened ? "flex" : "hidden"} sm:flex items-center space-x-4`}>

                    <CircularIcon variant={"neutral"} icon={<Bell className='text-inherit' />} />
                    <CircularIcon variant={"neutral"} icon={<Settings size={20} className='text-inherit' />} />
                    <div className='flex flex-col space-y-1 items-end'>
                        <h1 className='text-primary-text text-[10px] font-bold'>Nabilla A.</h1>
                        <p className='text-grey-300 text-[8px]'>Admin</p>

                    </div>
                </div>
                <CircularIcon variant={"empty"} onClick={() => setProfileOpened(!profileOpened)} className='cursor-pointer z-10' >A</CircularIcon>

            </div>
            <div ref={sideRef} className={`h-screen ${sideBarOpened ? "flex translate-0 fixed z-50" : "-translate-x-full fixed transition"} z-10 
                transition-all duration-400 xl:static xl:translate-x-0 xl:flex xl:w-70 
                3xl:w-85 bg-primary font-sans mt-0`}>
                <div className='relative flex flex-col p-8 w-full pr-0 space-y-2'>
                    <div className="flex space-x-5 items-center mb-10">
                        <div className='bg-secondary text-white font-bold text-3xl 3xl:text-4xl 
                    p-0.5 w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl 3xl:rounded-2xl text-center'>A</div>
                        <h1 className='text-3xl 3xl:text-4xl text-white font-bold pr-4'>Akademi</h1>
                    </div>

                    <div className='absolute xl:hidden top-19 right-5 cursor-pointer'>
                        <CircularIcon variant='details' size='sm' onClick={() => setSideBarOpened(false)}
                            icon={<X size={20} className='text-inherit' />} />
                    </div>

                    {sidebardata.map((x) =>
                        <NavLink key={x.text} to={x.to} onClick={() => setSideBarOpened(false)} className={({ isActive }) => `px-5 py-2.5 w-full rounded-l-3xl ${isActive ? "bg-white text-primary hover:text-blue-950" : "bg-primary text-background hover:bg-blue-950"}`}>
                            {({ isActive }) =>
                            (<div className='flex space-x-5 justify-start items-center'>
                                <img src={isActive ? x.iconblue : x.icon} alt="teacher_icon" className='h-[25px] w-[30px]' />
                                <p className='text-[14px] 3xl:text-[16px]'>{x.text}</p>
                            </div>
                            )}
                        </NavLink>)}

                </div>
            </div>


            <div className={` ${!doublescreen ? "flex-1 flex flex-col px-4 md:px-8 md:pt-0 pt-0 pb-2 h-screen md:pb-2 lg:h-screen min-w-0" : "flex-1 min-h-0 min-w-0 mb-2 lg:h-screen"} `}>
                {children}
            </div>

        </div>
    )
}

export default Sidebar