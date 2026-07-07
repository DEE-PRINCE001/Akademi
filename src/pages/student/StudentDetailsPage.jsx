import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import ScheduleCard from '../../components/Cards/ScheduleCard'
import Button from '../../components/labels/Button'
import { ArrowBigLeftIcon, ArrowLeft, Contact, Mail, MapPin, MoreHorizontal, Phone, PhoneCall, User2Icon } from 'lucide-react'
import CircularIcon from '../../components/labels/CircularIcon'
import userIcon from '../../assets/icons/UserIcon.svg'
import TrendingRow from '../../components/labels/TrendingRow'
import rarrow from '../../assets/icons/arrow-right.svg'
import larrow from '../../assets/icons/arrow-left.svg'
import { students } from './StudentData'
import { useNavigate, useParams } from 'react-router-dom'
import HeaderContainer from '../../components/Layout/HeaderContainer'


const StudentDetailsPage = ({ name, course, education, location, phone, email, about, expertise }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const student = students.find((x) => x.id == Number(id))

    return (
        <div className='flex-1 flex flex-col min-h-0 space-y-3 md:space-y-7 w-auto m-0'>
            <HeaderContainer>

                <GeneralHeader title={"Student Details"} searchBox reducedWidth />
            </HeaderContainer>


            <div className='flex-1 bg-background min-h-0 min-w-0 overflow-auto scrollbar-none
      flex h-full flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0 w-full'>
                <div className='flex-1 min-h-0 lg:overflow-auto scrollbar-none rounded-xl min-w-0 md:w-[70%] flex h-full flex-col space-y-5 w-full pb-3'>
                    <div className='flex-1 relative flex flex-col lg:min-h-fit min-w-0 w-full lg:overflow-auto scrollbar-none'>
                        <div className='w-full h-23 bg-primary rounded-t-xl'></div>
                        {/* <div className='fixed z-50 top-28 left-81 cursor-pointer'>
                            <CircularIcon variant='details' size='sm' onClick={() => alert("Comming Very Soon")}
                                icon={<ArrowLeft size={20} className='text-inherit' />} />
                        </div> */}
                        <div className='absolute top-2 left-3 cursor-pointer'>
                            <CircularIcon variant='details' size='sm' onClick={() => navigate(-1)}
                                icon={<ArrowLeft size={20} className='text-inherit' />} />
                        </div>
                        <div className='flex flex-col space-y-4 relative bg-white p-7 pb-0 pt-18 rounded-b-xl z-1'>
                            <div className='absolute top-4 right-5'>
                                <MoreHorizontal size={20} className='text-grey-300 hover:text-primary' />
                            </div>

                            <div className='flex flex-col space-y-3'>
                                <h1 className='text-[20px] leading-none text-primary-text font-bold'>{student.name || "Karen Hope"}</h1>
                                <p className='text-xs font-semibold text-grey-300 leading-none'>Student</p>
                            </div>

                            <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-5 lg:space-y-0'>

                                <div className='flex space-x-5 mb-5'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-[12px] text-grey-300'>Parents:</p>

                                        <div className='flex space-x-1 items-center'>
                                            <CircularIcon variant='secondary' size='sm' icon={<img src={userIcon} className='h-4 w-4' />} />
                                            <div className='font-semibold text-[12px] text-primary-text'>{student.parent || "Justin Hope"}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-[12px] text-grey-300'>Address:</p>
                                        <div className='flex space-x-2 items-center'>
                                            <CircularIcon variant='secondary' size='sm' icon={<MapPin size={15} className='text-white' />} />
                                            <div className='font-semibold text-[12px] text-primary-text'>{student.city || "Jarkata, Indonesia"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex space-x-5 mb-5'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-[12px] text-grey-300'>Phone:</p>
                                        <div className='flex space-x-2 items-center'>
                                            <CircularIcon variant='secondary' size='sm' icon={<Phone size={15} className='text-white' />} />
                                            <div className='font-semibold text-[12px] text-primary-text'>{phone || "+12 345 6789 0"}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-[12px] text-grey-300'>Email:</p>
                                        <div className='flex space-x-2 items-center'>
                                            <CircularIcon variant='secondary' size='sm' icon={<Mail size={15} className='text-white' />} />
                                            <div className='font-semibold text-[12px] text-primary-text'>{email || "maria@gmail.com"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-7 left-7 z-2 bg-grey-200 w-30 h-30 rounded-full border-5 border-white'>            </div>
                        <div className='absolute top-12 right-20 sm:right-30 md:right-40 w-25 sm:w-34 md:w-40 h-40 rounded-xl  bg-secondary'></div>
                        <div className='absolute top-5 right-7 w-30 sm:w-40 md:w-50 h-50 rounded-xl bg-accent'></div>

                    </div>



                    <div className='flex flex-col justify-between space-y-7 bg-white rounded-xl p-5'>
                        <div className='flex justify-start'>
                            <h1 className='text-primary-text text-lg font-bold'>School Expense</h1>
                        </div>
                        <div className='flex flex-col space-y-5'>
                            <TrendingRow cols='4' />
                            <TrendingRow cols='4' status='pending' />
                            <TrendingRow cols='4' status='complete' />
                            <TrendingRow cols='4' status='canceled' />
                            <TrendingRow cols='4' status='complete' />
                        </div>
                        <div className='flex justify-between items-center w-full'>
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


                    <div className='w-full md:w-[30%] rounded-lg flex md:hidden flex-col space-y-4 min-h-0'>
                        <div className='rounded-xl p-5 h-20 bg-white w-full'>
                            <div className='text-primary-text text-lg font-bold pb-2 leading-none'>Schedule Details</div>
                            <div className='text-[11px] text-grey-200'>Thursday, 10th April, 2021</div>

                        </div>
                        <div className='flex flex-col space-y-4 lg:scrollbar-thin'>

                            <ScheduleCard course={"Art"} topic={"Basic Art"} />
                            <ScheduleCard topic={"HTML and CSS"} course={"Proramming"} />
                            <ScheduleCard />
                            <ScheduleCard />
                            <Button colors={"bg-grey-300/30 text-primary border-none hover:text-white hover:bg-primary"}
                                size={"w-full p-3 mt-2 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>

                        </div>
                    </div>
                </div>

                <div className='hidden w-full md:w-[30%] rounded-lg md:flex flex-col space-y-4 min-h-0'>
                    <div className='rounded-xl p-5 h-20 bg-white w-full'>
                        <div className='text-primary-text text-lg font-bold pb-2 leading-none'>Schedule Details</div>
                        <div className='text-[11px] text-grey-200'>Thursday, 10th April, 2021</div>

                    </div>
                    <div className='flex flex-col space-y-4 lg:overflow-auto lg:scrollbar-thin'>

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

export default StudentDetailsPage