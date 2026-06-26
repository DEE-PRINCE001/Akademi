import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import ScheduleCard from '../../components/Cards/ScheduleCard'
import Button from '../../components/labels/Button'
import { ArrowBigLeftIcon, ArrowLeft, Contact, Mail, MapPin, MoreHorizontal, Phone, PhoneCall } from 'lucide-react'
import CircularIcon from '../../components/labels/CircularIcon'

const TeacherDetailsPage = ({ name, course, education, location, phone, email, about, expertise }) => {
    return (
        <div className='relative flex-1 flex flex-col min-h-0 space-y-3 md:space-y-7 w-auto m-0'>
            <div className='md:w-[72%]'>
                <GeneralHeader title={"Events"} searchBox />
            </div>
            
            <div className='flex-1 min-h-0 min-w-0 flex h-full flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0 w-full'>
                <div className='flex-1 bg-white rounded-xl min-w-0 flex h-full flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0 w-full pb-3'>
                    <div className='flex-1 relative flex flex-col min-h-0 min-w-0 w-full md:w-[70%] overflow-auto scrollbar-none'>
                        <div className='w-full h-23 bg-primary rounded-t-xl'></div>
                        <div className='absolute top-2 left-3 cursor-pointer'>
                            <CircularIcon variant='details' size='sm'
                                icon={<ArrowLeft size={20} className='text-inherit' />} />
                        </div>
                        <div className='flex-1 flex flex-col space-y-5 relative bg-white h-full min-h-0 p-7 pt-18 rounded-b-xl z-1'>
                            <div className='absolute top-4 right-5'>
                                <MoreHorizontal size={20} className='text-grey-300 hover:text-primary' />
                            </div>

                            <div className='flex flex-col space-y-3'>
                                <h1 className='text-[20px] leading-none text-primary-text font-bold'>{name || "Maria Historia"}</h1>
                                <p className='text-xs font-semibold text-grey-300 leading-none'>{course ? course + " Teacher" : "Histroy Teacher"}</p>
                            </div>
                            <div className='flex space-x-7 mb-8'>
                                <div className='flex space-x-2 items-center'>
                                    <CircularIcon variant='secondary' size='sm' icon={<MapPin size={15} className='text-white' />} />
                                    <div className='font-semibold text-[14px] text-primary-text'>{location || "Jarkata, Indonesia"}</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <CircularIcon variant='secondary' size='sm' icon={<Phone size={15} className='text-white' />} />
                                    <div className='font-semibold text-[14px] text-primary-text'>{phone || "+12 345 6789 0"}</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <CircularIcon variant='secondary' size='sm' icon={<Mail size={15} className='text-white' />} />
                                    <div className='font-semibold text-[14px] text-primary-text'>{email || "maria@gmail.com"}</div>
                                </div>
                            </div>

                            <div className='flex flex-col space-y-2 text-primary-text'>
                                <h3 className='font-bold text-[16px]'>About:</h3>
                                <p className='text-sm w-[70%]'>{about || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} </p>
                            </div>
                            <div className='flex flex-col space-y-2 text-primary-text'>
                                <h3 className='font-bold text-[16px]'>Education:</h3>
                                <div className='pl-7 p-2 flex flex-col space-y-6'>
                                    <div className='relative flex flex-col space-y-1'>
                                        <div className='absolute top-2 -left-3 w-1 h-1 bg-primary-text rounded-full'></div>
                                        <h4 className='font-semibold text-[14px]'>History Major, University of Indonesia</h4>
                                        <p className='text-[14px] text-grey-300'>2013 - 2017</p>
                                    </div>
                                    <div className='relative flex flex-col space-y-1'>
                                        <div className='absolute top-2 -left-3 w-1 h-1 bg-primary-text rounded-full'></div>
                                        <h4 className='font-semibold text-[14px]'>Master of History, University of Akademi, Indonesia</h4>
                                        <p className='text-[14px] text-grey-300'>2013 - 2017</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 text-primary-text'>
                                <h3 className='font-bold text-[16px]'>Expertise:</h3>
                                <p className='text-sm w-[70%]'>{expertise || "World History, Philosophy, Prehistoric, Culture, Ancient"} </p>
                            </div>
                        </div>
                        <div className='absolute top-7 left-7 z-2 bg-grey-200 w-30 h-30 rounded-full border-5 border-white'>            </div>
                        <div className='absolute top-12 right-40 w-40 h-40 rounded-full border-10 border-secondary'></div>
                        <div className='absolute top-5 right-7 w-50 h-50 rounded-full border-10 border-accent'></div>

                    </div>
                </div>

                <div className='w-[30%] rounded-lg flex flex-col space-y-4 min-h-0'>
                    <div className='rounded-xl p-5 h-20 bg-white w-full'>
                        <div className='text-primary-text text-lg font-bold pb-2 leading-none'>Schedule Details</div>
                        <div className='text-[11px] text-grey-200'>Thursday, 10th April, 2021</div>

                    </div>
                    <div className='flex flex-col space-y-4 overflow-auto scrollbar-thin'>

                        <ScheduleCard course={"Art"} topic={"Basic Art"} />
                        <ScheduleCard topic={"HTML and CSS"} course={"Proramming"} />
                        <ScheduleCard />
                        <ScheduleCard />
                        <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
                            size={"w-full p-3 mt-2 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TeacherDetailsPage