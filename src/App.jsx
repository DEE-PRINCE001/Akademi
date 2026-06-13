import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar'
import Test from './components/Layout/Test'
import Dashboard from './pages/Dashboard'
import SearchBox from './components/inputs/SearchBox'
import TextArea from './components/inputs/TextArea'
import { NavContext } from './contexts/NavContext'

// import reactLogo from './assets/react.svg'


function App() {

    const [sideBarOpened, setSideBarOpened] = useState(false);
    const [profileOpened, setProfileOpened] = useState(false);

  return (
    <>
    <NavContext.Provider value={{ sideBarOpened, setSideBarOpened, profileOpened, setProfileOpened }}>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path= '/students' element ={<Test/>} />
          <Route path= '/teachers' element ={<Test/>} />
          <Route path= '/event' element ={<Test/>} />
          <Route path= '/finance' element ={<Test/>} />
          <Route path= '/food' element ={<Test/>} />
          <Route path= '/user' element ={<Test/>} />
          <Route path= '/chat' element ={<Test/>} />
          <Route path= '/latest-activity' element ={<Test/>} />
        </Routes>  
      </Sidebar>
    </NavContext.Provider>
    </>
  )
}

export default App
