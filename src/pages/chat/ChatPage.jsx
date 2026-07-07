import React, { useEffect, useMemo, useRef, useState } from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import CircularIcon from '../../components/labels/CircularIcon'
import LabelLegend from '../../components/labels/LabelLegend'
import { MoreHorizontal, VideoIcon } from 'lucide-react'
import ChatInput from '../../components/inputs/ChatInput'
import SearchBox from '../../components/inputs/SearchBox'
import MessageRow from '../dashboard/MessageRow'
import Button from '../../components/labels/Button'
import Message from './Message'
import HeaderContainer from '../../components/Layout/HeaderContainer'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { students } from '../student/StudentData'



const ChatPage = ({ name, status }) => {

  const navigate = useNavigate()
  const { id } = useParams()
  const rid = id;


  const groups = [
    { id: 10, name: "Class VII", profile: "primary" },
    { id: 11, name: "Samantha William", profile: "secondary" },
    { id: 12, name: "All Students V8", profile: "accent" }
  ]

  const student = students.find((x) => x.id == Number(rid)) || groups.find((x) => x.id == Number(rid));
  const studentMessages = students.slice(0, 3)


  const [value, setValue] = useState("")
  const chatRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Doing this now",
      type: 1
    },
    {
      id: 2,
      text: "Making it dynamic",
      type: 2,

    }
  ])



  const onChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    setMessages([...messages,
    { id: (messages.at(-1).id) + 1, text: value, type: 1 }])
    console.log(value)
    setValue("")
  }
  const handleSend = () => {
    setMessages([...messages,
    { id: (messages.at(-1).id) + 1, text: value, type: 2 }])
    setValue("")
  }

  let lastOutgoingId = null;
  let lastIncomingId = null;

  for (let i = messages.length - 1; i >= 0; i--) {
    let message = messages[i]

    if (lastOutgoingId == null && message.type == 1) {
      lastOutgoingId = message.id;
    }

    if (lastIncomingId == null && message.type == 2) {
      lastIncomingId = message.id
    }

    if (lastIncomingId != null && lastOutgoingId != null) {
      break;
    }

  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages])
  return (
    <div className='flex flex-col space-y-3 md:space-y-7 min-h-0 h-screen m-0'>
      <HeaderContainer>
        <GeneralHeader title={"Chats"} searchBox reducedWidth />
      </HeaderContainer>
      <div className='flex-1 min-h-0 rounded-2xl bg-white flex'>



        <div className={`min-h-0 ${student ? 'hidden' : 'flex'} md:flex overflow-auto scrollbar-thin w-full md:w-80 border-r border-grey-200 p-5`}>
          <div className='flex flex-col space-y-4 w-full'>

            <h1 className='font-bold text-primary-text text-lg pb-'>Messages</h1>

            <SearchBox size="at" className="mb-5" />

            <div className='flex flex-col space-y-3'>
              <h3 className='text-grey-300 pt-1 font-medium text-[12px] leading-none'>Groups</h3>
              {groups.map((x) => <MessageRow key={x.id} id={x.id}
                message='The best is yet to come, you know that right?' name={x.name} profile={x.profile} />)}
            </div>

            <div className='flex flex-col space-y-3'>
              <h3 className='text-grey-300 pt-1 font-medium text-[12px] leading-none'>Chats</h3>
              {studentMessages.map((x) => <MessageRow key={x.id} id={x.id}
                message='The best is yet to come, you know that right?' name={x.name} notification={"3"} />)}
            </div>

            <Button colors={"bg-button-grey text-primary border-none hover:text-white hover:bg-primary"}
              size={"w-full p-3 font-semibold text-sm"} className={"cursor-pointer"}>View More</Button>
          </div>
        </div>

        {/* ChatWindow */}
        <div className={`flex-1 min-w-0 ${!student ? 'hidden' : 'flex'} md:flex md:flex-col`}>

          <div className='flex-1 min-w-0 flex flex-col h-full'>
            {student && (
              <div className='w-full h-20 border-b border-grey-200 p-5 flex justify-between items-center'>
                <div className='flex space-x-3 items-center'>
                  <CircularIcon variant="details" size='sm' className=" md:hidden"
                  onClick={() => navigate("/chat")}
                                icon={<ArrowLeft size={20} className='text-inherit' />} />
                  <CircularIcon />
                  <div className='flex flex-col'>
                    <h2 className='font-bold text-primary-text text-[14px]'>
                      {student.name || "Samantha Williams"}
                    </h2>
                    <LabelLegend label={"Online"} />
                  </div>
                </div>
                <div className='flex space-x-5 text-grey-200'>
                  <VideoIcon size={20} />
                  <MoreHorizontal size={20} />
                </div>

              </div>)}

            {/* Chats */}
            {student && (
              <div ref={chatRef} className='flex-1 p-5 overflow-y-auto scrollbar-thin border-b border-grey-300 flex-col space-y-2'>
                {messages.map((x) => <Message type={x.type} message={x.text} isLastMessage={x.id == lastIncomingId || x.id == lastOutgoingId} />)}

              </div>
            )}

            {!student && (
              <div className='flex-1 flex justify-center items-center'>
                <h1 className='text-grey-300 text-lg font-semibold text-center'>Kindly Select <br/> a chat to start <br/> messaging</h1>
              </div>
            )}


            {/* Keyboard  */}
            <div className='w-full min-w-0 h-20 border-grey-300 p-4'>
              <ChatInput value={value} onAttachmentClick={handleSend} onSend={handleSubmit} onChange={onChange} disabled={!student} />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default ChatPage