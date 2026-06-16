import React from 'react'

const Header = ({selected}) => {
  return (
    <div className="
    grid
    grid-cols-[30px_2.5fr_1fr_1.3fr_1.5fr_1fr_1fr_1fr_40px]
    gap-x-5
    px-8 py-6 text-xs font-semibold text-primary-text
">
        
        <input
    type="checkbox"
    checked={selected}
    className="
        h-4
        w-4
        rounded
        accent-primary
    "
/>
        <div>Name</div>
        <div>ID</div>
        <div>Date</div>
        <div>Parent Name</div>
        <div>City</div>
        <div>Contact</div>
        <div>Grade</div>
        <div className=''>Action</div>

</div>
  )
}

export default Header