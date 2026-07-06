import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import ActivityTimeline from './ActivityTimeline'
import HeaderContainer from '../../components/Layout/HeaderContainer'

const LatestActivityPage = () => {
  return (
    <div className='flex-1 flex flex-col space-y-3 md:space-y-7 min-h-0 h-full m-0'>
      <HeaderContainer >
        <GeneralHeader title={"Latest Activity"} searchBox reducedWidth/>
      </HeaderContainer>
      <div className='flex-1 min-h-0 overflow-auto rounded-2xl scrollbar-none'>        
        <ActivityTimeline />
      </div>
    </div>
  )
}

export default LatestActivityPage