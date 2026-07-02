import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import Button from '../../components/labels/Button'
import { ArrowLeft, MoreHorizontal } from 'lucide-react'
import CategoryLabel from './CategoryLabel'
import star from '../../assets/icons/ratingstar.svg'
import chart from '../../assets/icons/chart.svg'
import arrow from '../../assets/icons/arrowup.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FoodComment from './FoodComment'
import { foodItemsData } from './FoodData'
import { useNavigate, useParams } from 'react-router-dom'
import CircularIcon from '../../components/labels/CircularIcon'


const FoodDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const food = foodItemsData.find((x) => x.id == Number(id));

    return (
        <div className='flex-1 flex flex-col lg:min-h-0 space-y-3 md:space-y-7 w-auto m-0'>
            <div className='relative md:w-[72%]'>
                <GeneralHeader title={"Food Details"} searchBox backButton/>
                <div className='absolute top-9 left-0 cursor-pointer hidden xl:inline'>
                    <CircularIcon size='sm' onClick={() => navigate(-1)}
                        icon={<ArrowLeft size={20} className='text-inherit' />} />
                </div>

            </div>


            <div className='flex-1 min-w-0 flex flex-col space-y-5 lg:flex-row lg:space-x-6 lg:space-y-0 w-full'>
                <div className='flex-1 relative lg:min-h-0 bg-white overflow-auto scrollbar-none rounded-xl min-w-0 lg:w-[70%] flex h-full flex-col space-y-8 w-full p-5'>
                    <div className='w-full flex space-x-6'>
                        <div className='absolute top-4 right-0 cursor-pointer'>
                            <MoreHorizontal size={20} className='text-grey-300 hover:text-primary-text' />
                        </div>

                        <div className='w-52 h-35 rounded-xl bg-grey-200'>
                            <img src="" alt="" />
                        </div>
                        <div className='flex-1 flex flex-col space-y-1.5'>
                            <div className='text-primary-text font-bold text-[14px]'>{food.name || "Beef Steak with Fried Potato"}</div>
                            <CategoryLabel type={food.category} />
                            <p className='mt-3 w-[80%] text-grey-300 text-xs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className='flex space-x-7'>
                        <div className='flex flex-col'>
                            <div className='text-xs font-normal text-grey-300'>Rating</div>
                            <div className='flex space-x-2 items-center font-bold'> <img src={star} alt="" className='w-3.5 h-3.5' /> <span>{food.rating || 4.9}</span></div>
                        </div>
                        <div className='flex space-x-4'>
                            <img src={chart} alt="" className='w-10 h-10' />
                            <div className='flex flex-col justify-between'>
                                <div className='font-bold'>{food.totalOrders || "1.456"}</div>
                                <div className='text-xs font-normal text-grey-300'>Total Order</div>
                            </div>
                        </div>
                        <div className='flex space-x-3 items-start'>
                            <img src={arrow} alt="" className='w-10 h-10 pb-2' />
                            <div className='flex flex-col justify-between '>
                                <div className='leading-none pb-2 font-bold'>{food.interest ? food.interest + "%" : "26%"}</div>
                                <div className='text-xs font-normal text-grey-300'>Interest</div>
                            </div>
                        </div>
                        <div className="font-bold w-10 h-10">
                            <CircularProgressbar

                                value={food.progress || "50"}
                                text={`${food.progress ? food.progress : "50"}%`}
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
                    </div>

                    {/* Ingredients and nutritions */}
                    <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-15'>
                        <div className='flex flex-col space-y-2 lg:w-[50%]'>
                            <h2 className='font-bold text-[16px] text-primary-text'>Ingredients</h2>
                            <div>
                                <ul className='list-disc text-grey-300 text-xs pl-6 leading-loose'>
                                    <li>2 tablespoons butter, softened, divided</li>
                                    <li>
                                        1 teaspoon minced fresh parsley
                                    </li>
                                    <li>
                                        1/2 teaspoon minced garlic
                                    </li>
                                    <li>
                                        1/4 teaspoon reduced-sodium soy sauce
                                    </li>
                                    <li>
                                        1 beef flat iron steak or boneless top sirloin steak (3/4 pound)
                                    </li>
                                    <li>
                                        1/8 teaspoon salt
                                    </li>
                                    <li>
                                        1/8 teaspoon pepper
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-2 lg:w-[50%]'>
                            <h2 className='font-bold text-[16px] text-primary-text'>Nutrition:</h2>
                            <div>
                                <ul className='list-disc text-grey-300 text-xs pl-6 leading-loose'>
                                    <li>
                                        Calories: 217.
                                    </li>
                                    <li>
                                        Water: 61%
                                    </li>
                                    <li>
                                        Protein: 26.1 grams.
                                    </li>
                                    <li>
                                        Carbs: 0 grams.
                                    </li>
                                    <li>
                                        Sugar: 0 grams.
                                    </li>
                                    <li>
                                        Fiber: 0 grams.
                                    </li>
                                    <li>
                                        Fat: 11.8 grams.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full mb-5 lg:mb-0 lg:w-[30%] flex flex-col space-y-4 lg:min-h-0'>
                    <FoodComment />
                    <FoodComment />
                    <FoodComment />

                </div>


            </div>

        </div >
    )
}

export default FoodDetailsPage;