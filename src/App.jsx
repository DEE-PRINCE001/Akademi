import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar'
import Test from './components/Layout/Test'
import Dashboard from './pages/dashboard/Dashboard'
import StudentPage from './pages/student/StudentPage'
import ChatPage from './pages/chat/ChatPage'
import EventPage from './pages/event/EventPage'
import FinancePage from './pages/finance/FinancePage'
import FoodPage from './pages/food/FoodPage'
import LatestActivityPage from './pages/latestactivity/LatestActivityPage'
import TeacherPage from './pages/teacher/TeacherPage'
import UserPage from './pages/user/UserPage'
import TeacherDetailsPage from './pages/teacher/TeacherDetailsPage'




import { NavContext } from './contexts/NavContext'


// import reactLogo from './assets/react.svg'


function App() {

    const [sideBarOpened, setSideBarOpened] = useState(false);
    const [profileOpened, setProfileOpened] = useState(false);

  return (
    <>
    <NavContext.Provider value={{ sideBarOpened, setSideBarOpened, profileOpened, setProfileOpened }}>
        <Routes>
        
          <Route path='/' element={
            <Sidebar doublescreen={true} >
              <Dashboard/>
              </Sidebar>
              } />

        
            <Route path= '/students' element ={
                       <Sidebar>
                         <StudentPage/>
                       </Sidebar>
                       } />

            <Route path= '/teachers' element ={<Sidebar>
              <TeacherPage/>
            </Sidebar>} />

            <Route path= '/event' element ={<Sidebar>
              <EventPage/>
            </Sidebar>} />

            <Route path= '/finance' element ={<Sidebar>
              <FinancePage/>
            </Sidebar>} />

            <Route path= '/food' element ={<Sidebar>
              <FoodPage/>
            </Sidebar>} />

            <Route path= '/user' element ={<Sidebar>
              {/* <UserPage/> */}
              <TeacherDetailsPage/>
            </Sidebar>} />

            <Route path= '/chat' element ={<Sidebar>
              <ChatPage/>
            </Sidebar>} />

            <Route path= '/latest-activity' element ={<Sidebar>
              <LatestActivityPage/>
            </Sidebar>} />
            
        </Routes>  
    </NavContext.Provider>
    </>
  )
}

export default App
