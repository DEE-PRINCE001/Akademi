import React from 'react'

const FoodMenu = ({image, food, description}) => {
    return (
        <div className='flex flex-col space-y-1'>
            <div className='w-full h-30 rounded-2xl bg-grey-200 mb-5'>
                {image && <img src={image} alt='...'  className='h-full w-full'/>}
            </div>
            <h3 className='text-primary-text font-semibold text-sm'>{food || "Beef Steak with Fried Potato"}</h3>
            <p className='text-grey-300 text-xs'>{description || "Lorem ipsum dolor sit amet..."}</p>
        </div>
    )
}

export default FoodMenu