import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import CircularIcon from '../../components/labels/CircularIcon'
import LabelLegend from '../../components/labels/LabelLegend'
import { MoreHorizontal, VideoIcon } from 'lucide-react'
import ChatInput from '../../components/inputs/ChatInput'
import SearchBox from '../../components/inputs/SearchBox'
import MessageRow from '../dashboard/MessageRow'
import Button from '../../components/labels/Button'


const ChatPage = ({ name, status }) => {
  return (
    <div className='flex-1 flex flex-col space-y-3 md:space-y-7 min-h-0 h-full m-0'>
      <div className='md:w-[67%] xl:w-[72%]'>
        <GeneralHeader title={"Chats"} searchBox />
      </div>
      <div className='flex-1 min-h-0 rounded-2xl bg-white flex'>



        <div className='min-h-0 overflow-auto scrollbar-thin w-full md:w-80 border-r border-grey-200 p-5'>
          <div className='flex flex-col space-y-4'>

            <h1 className='font-bold text-primary-text text-lg pb-'>Messages</h1>

            <SearchBox size="at" className="mb-5" />
            
            <div className='flex flex-col space-y-3'>
              <h3 className='text-grey-300 pt-1 font-medium text-[12px] leading-none'>Groups</h3>
              <MessageRow profile="primary" message='The best is yet to come, you know that right?' name={"Class VII"} notification={"3"} />
              <MessageRow profile={"secondary"} message='The best is yet to come, you know that right?' name={"Samantha William"} notification={"5"} />
              <MessageRow profile={"accent"} message='The best is yet to come, you know that right?' name={"All Students V8"} />
            </div>

            <div className='flex flex-col space-y-3'>
              <h3 className='text-grey-300 pt-1 font-medium text-[12px] leading-none'>Chats</h3>
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} notification={2} />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} notification={2} />
              <MessageRow message='The best is yet to come, you know that right?' name={"Samantha William"} />
            </div>

            <Button colors={"bg-button-grey text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
          </div>
        </div>

        <div className='flex-1 h-full hidden md:flex lg:flex-col'>

          <div className='flex-1 flex flex-col h-full'>
            <div className='w-full h-20 border-b border-grey-200 p-5 flex justify-between items-center'>
              <div className='flex space-x-3 items-center'>
                <CircularIcon />
                <div className='flex flex-col'>
                  <h2 className='font-bold text-primary-text text-[14px]'>
                    {name || "Samantha Williams"}
                  </h2>
                  <LabelLegend label={"Online"} />
                </div>
              </div>
              <div className='flex space-x-5 text-grey-200'>
                <VideoIcon size={20} />
                <MoreHorizontal size={20} />
              </div>

            </div>

            <div className='flex-1 border-b border-grey-300'></div>
            <div className='w-full h-20 border-grey-300 p-4'>
              <ChatInput onAttachmentClick />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default ChatPage