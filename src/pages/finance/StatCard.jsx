import React from 'react'
import CircularIcon from '../../components/labels/CircularIcon'

const StatCard = ({ icon, title, value, percentage, iconVariant }) => {
    return (
        <div className='flex items-center space-x-3 lg:space-x-4 justify-start xl:justify-center bg-white rounded-xl p-4 py-5'>
            <div className='w-fit'>
                <CircularIcon size="lg" variant={iconVariant || "primary"} icon={<img src={icon} className='text-white h-6 w-6' />} />
            </div>
            <div className='flex space-x-2 items-center justify-between sm:justify-start sm:items-start w-full sm:space-x-0 sm:flex-col sm:space-y-3 text-xs'>
                <span className='hidden sm:flex text-grey-300 text-sm leading-none'>{title || "Test"}</span>
                <span className='hidden sm:flex text-2xl leading-none font-bold text-primary-text'>{value || "chenking this out"}</span>
                <span className={`hidden sm:flex font-semibold leading-none ${percentage[0] == "-" ? "text-danger" : "text-success"}`}> {percentage + "% "}
                    <span className='text-grey-300 font-normal leading-none'>than last month</span></span>

                <div className='flex flex-col space-y-3 sm:hidden'>
                    <span className='text-grey-300 text-sm leading-none'>{title || "Test"}</span>
                    <span className='text-2xl leading-none font-bold text-primary-text'>{value || "chenking this out"}</span>
                </div>
                <span className={`sm:hidden font-semibold leading-none ${percentage[0] == "-" ? "text-danger" : "text-success"}`}> {percentage + "% "}
                    <span className='text-grey-300 font-normal leading-none'>than last month</span></span>
            </div>
        </div>
    )
}

export default StatCard