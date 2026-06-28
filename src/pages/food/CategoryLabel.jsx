import React from 'react'

const CategoryLabel = ({type}) => {
  return (
    <div className='px-3 py-1 bg-primary rounded-full text-[10px] text-white w-fit'>{type || "Breakfast"}</div>
  )
}

export default CategoryLabel