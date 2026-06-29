import React from 'react'
import UnpaidStudentRow from '../dashboard/UnpaidStudentRow'
import CircularIcon from '../../components/labels/CircularIcon'
import larrow from '../../assets/icons/arrow-left.svg'
import rarrow from '../../assets/icons/arrow-right.svg'


const UnpaidStudentSection = () => {
    return (
        <div className='flex flex-col space-y-7 bg-white rounded-xl p-5'>
            <div className='flex justify-start'>
                <h1 className='text-primary-text text-lg font-bold'>Unpaid Student Intuition</h1>
            </div>
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <UnpaidStudentRow />
            <div className='flex justify-between items-center w-full'>
                <div className='text-grey-300 text-xs'>
                    Showing <span className='text-primary font-semibold'>1-5</span> from <span className='text-primary font-semibold'>100</span> data
                </div>
                <div className='flex space-x-1 items-center'>
                    <img src={larrow} alt="" className='w-3 h-3 mr-2' />
                    <CircularIcon variant='emptyWithStroke' size='sm'>1</CircularIcon>
                    <CircularIcon variant='emptyWithStroke' size='sm'>2</CircularIcon>
                    <CircularIcon variant='emptyWithStroke' size='sm'>3</CircularIcon>
                    <img src={rarrow} alt="" className='w-3 h-3 ml-2' />
                </div>
            </div>
        </div>

    )
}

export default UnpaidStudentSection