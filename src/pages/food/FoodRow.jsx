import React from 'react'
import star from '../../assets/icons/ratingstar.svg'
import chart from '../../assets/icons/chart.svg'
import arrow from '../../assets/icons/arrowup.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MoreHorizontal } from 'lucide-react';

const FoodRow = ({ type, name, interest, rating, noOfOrder, percentage }) => {
    return (
        <div className='flex space-x-5'>
            <div className='rounded-lg w-28 h-24 bg-grey-200'>
            </div>

            <div className='flex-1 flex flex-col'>
                <div className='px-3 py-1 bg-primary rounded-full text-[10px] text-white w-fit'>{type || "Breakfast"}</div>
                <div className='grid items-center justify-center w-full grid-cols-[1.7fr_0.5fr_1fr_1fr_0.5fr_0.5fr] gap-2 md:gap-5 text-primary-text font-bold text-[14px]'>
                    <div>{name || "Beef Steak with Fried Potato"}</div>
                    <div className='flex space-x-2 items-center'> <img src={star} alt="" className='w-3.5 h-3.5' /> <span>{rating || 4.9}</span></div>
                    <div className='flex space-x-4'>
                        <img src={chart} alt="" className='w-10 h-10' />
                        <div className='flex flex-col justify-between'>
                            <div>{noOfOrder || "1.456"}</div>
                            <div className='text-xs font-normal text-grey-200'>Total Order</div>
                        </div>
                    </div>
                    <div className='flex space-x-3 items-start'>
                        <img src={arrow} alt="" className='w-10 h-10 pb-2' />
                        <div className='flex flex-col justify-between '>
                            <div className='leading-none pb-2'>{interest ? interest + "%" : "26%"}</div>
                            <div className='text-xs font-normal text-grey-200'>Interest</div>
                        </div>
                    </div>
                    <div className="font-bold w-10 h-10">
                        <CircularProgressbar
                            
                            value={percentage || "50"}
                            text={`${percentage? percentage: "50"}%`}
                            styles={buildStyles({
                                rotation: "0.5",
                                strokeLinecap: 'round',                             
                                textSize: '24px',
                                pathColor: 'var(--color-primary)',      
                                trailColor: 'var(--color-grey-200)',    
                                textColor: 'var(--color-primary-text)', 
                            })}
                        />
                    </div>
                    <div className='flex '>
                        <MoreHorizontal size={20} onClick={() => alert("Not activated yet")} className='text-grey-300 cursor-pointer hover:text-primary-text'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodRow