import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import CircularIcon from '../../components/labels/CircularIcon'
import { ArrowLeft, Mail, MapPin, MoreHorizontal, Phone, Plus } from 'lucide-react'
import userIcon from '../../assets/icons/UserIcon.svg'
import StudentRow from '../dashboard/StudentRow'
import Button from '../../components/labels/Button'
import SearchBox from '../../components/inputs/SearchBox'
import MessageRow from '../dashboard/MessageRow'


StudentRow


const UserPage = ({ name, course, education, location, phone, email, about, expertise }) => {
  return (
    <div className={`lg:flex h-full`} >
      <div className='relative flex-1 flex flex-col w-full px-2 md:p-8 md:pt-0 
              pb-0 h-screen space-y-5 overflow-y-auto scrollbar-none'>
        <div className='pt-3 md:pt-7 md:pb-3 sticky top-0 w-full bg-background/50 backdrop-blur-xl z-5'>

          {/* The Header */}
          <GeneralHeader title={"User Dashboard"} searchBox />
        </div>
        <div className='flex-1 flex-col space-y-8 rounded-xl'>

          <div className='relative flex flex-col w-full h-fit'>
            <div className='w-full h-23 bg-primary rounded-t-xl'></div>
            {/* <div className='absolute top-2 left-3 cursor-pointer'>
              <CircularIcon variant='details' size='sm' onClick={() => alert("Comming Very Soon")}
                icon={<ArrowLeft size={20} className='text-inherit' />} />
            </div> */}


            <div className='flex flex-col space-y-5 relative bg-white p-7 pb-5 pt-18 rounded-b-xl z-1'>
              <div className='absolute top-4 right-5'>
                <MoreHorizontal size={20} className='text-grey-300 hover:text-primary' />
              </div>

              <div className='flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-12 sm:items-center'>
                {/* left side of the details */}
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-[20px] leading-none text-primary-text font-bold'>{name || "Nabila Azalea"}</h1>
                  <p className='text-xs font-semibold text-primary-text leading-none'>Admin</p>
                  <div className='flex space-x-2 items-center'>
                    <MapPin size={12} className='text-grey-300' />
                    <div className='text-xs text-grey-300 leading-none'>{location || "Jarkata, Indonesia"}</div>
                  </div>
                </div>

                {/* right side */}
                <div className='flex space-x-15'>
                  {/* <div className='flex flex-col space-y-5 sm:flex-row sm:space-x-15 sm:space-y-0'></div> */}
                  <div className='flex flex-col space-y-2'>
                    <p className='text-[12px] text-grey-300'>Phone:</p>
                    <div className='flex space-x-3 items-center'>
                      <CircularIcon variant='secondary' size='sm' icon={<Phone size={15} className='text-white' />} />
                      <div className='font-semibold text-[12px] text-primary-text'>{phone || "+12 345 6789 0"}</div>
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <p className='text-[12px] text-grey-300'>Email:</p>
                    <div className='flex space-x-3 items-center'>
                      <CircularIcon variant='secondary' size='sm' icon={<Mail size={15} className='text-white' />} />
                      <div className='font-semibold text-[12px] text-primary-text'>{email || "jordon@gmail.com"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute top-7 left-7 z-2 bg-grey-200 w-30 h-30 rounded-full border-5 border-white'>            </div>
            <div className='absolute top-12 right-40 w-40 h-40 rounded-full  bg-secondary'></div>
            <div className='absolute top-5 right-7 w-50 h-50 rounded-full bg-accent'></div>
          </div>

          {/* Contact and message Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col space-y-5 bg-white rounded-xl p-5'>
              <div className='flex justify-between'>
                <div className='flex-col justify-between'>
                  
                  <h1 className='font-bold text-primary-text text-lg pb-1'>Contacts</h1>
                  <p className='text-xs text-grey-200'>You have <span className='text-grey-300 font-semibold'>450</span> students </p>
                </div>

                <CircularIcon size='xm' icon={<Plus size={15} strokeWidth={4} className="text-white" />} className='cursor-pointer' />
              </div>
              <SearchBox size="at" />

              {[{}, {}, {}, {}, {}].map((x) =>
                <StudentRow name={"Samantha Williams"} grade={"VII B"} />
              )}
              <Button colors={"bg-button-grey text-primary border-none hover:text-white hover:bg-primary"}
                size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
            </div>


            {/* Message Section */}
            <div className='flex flex-col space-y-3 bg-white rounded-xl p-5'>
              <h1 className='font-bold text-primary-text text-lg pb-2'>Messages</h1>
              <SearchBox size="at" className="mb-4" />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} notification={"3"} softborder />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} notification={"5"} softborder />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} softborder />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} notification={2} softborder />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} softborder />
              <Button colors={"bg-button-grey text-primary border-none hover:text-white hover:bg-primary"}
                size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
            </div>
          </div>
        </div>
      </div>


      {/* Right SideBar */}
      <div className='relative hidden lg:block bg-white w-70 h-full'>
        <div className='sticky top-0 bg-transparent w-full backdrop-blur-xl h-20'></div>
        <div className='flex flex-col space-y-5 p-5'>
          <div className='relative flex flex-col text-white space-y-5 bg-primary rounded-l-2xl rounded-t-2xl
          w-full  min-h-60 p-5 overflow-clip'>
            {/* Background colors */}
            <div className='absolute -bottom-14 right-6 w-17 bg-secondary rounded-full h-35 '></div>
            <div className='absolute -bottom-14 -right-3 w-17 bg-accent rounded-full h-50 '></div>

            {/* data */}
            <div className='text-white text-xs flex w-full justify-between'>
              <div className='flex flex-col space-y-1'>
                <p>Your Plan</p>
                <h2 className='font-bold text-xl'>Free</h2>
              </div>
              <MoreHorizontal size={20} className='text-white font-bold hover:text-accent cursor-pointer' />
            </div>

            <div className='flex flex-col space-y-2'>
              <ul className='list-disc pl-4 font-semibold leading-loose text-xs'>
                <li>50 GB Storage</li>
                <li>Limited Features</li>
              </ul>
              <p className='text-[10px] w-[85%] z-10'>Upgrade to Premium Plan to get more Features & Storage memory </p>
            </div>

            <div>
              <Button colors={"bg-white text-primary font-semibold text-xs"}
              size={"px-3 py-2"}>Upgrade Plan</Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserPage