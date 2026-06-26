import React, { useState } from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import CircularIcon from '../../components/labels/CircularIcon'
import rarrow from '../../assets/icons/arrow-right.svg'
import larrow from '../../assets/icons/arrow-left.svg'
import { NavLink } from 'react-router-dom'
import FoodRow from './FoodRow'

const FoodPage = () => {
  const [activeMenu, setActiveMenu] = useState("all");

  const foodItemsData = [
    {
      id: 1,
      name: "Beef Steak with Fried Potato",
      category: "Lunch",
      rating: 4.9,
      totalOrders: 1456, // Rendered as 1.456 or formatted via utils
      interest: 26,      // Percentage value for the trend indicator
      progress: 50,      // Percentage value for the circular chart
      image: "/assets/images/beef-steak.png" // Placeholder path for the left layout block
    },
    {
      id: 2,
      name: "Pancake with Honey",
      category: "Breakfast",
      rating: 4.7,
      totalOrders: 1456,
      interest: 26,
      progress: 40,
      image: "/assets/images/pancake.png"
    },
    {
      id: 3,
      name: "Japanese Beef Ramen",
      category: "Lunch",
      rating: 4.8,
      totalOrders: 1456,
      interest: 26,
      progress: 30,
      image: "/assets/images/beef-ramen.png"
    },
    {
      id: 4,
      name: "Mixed Salad",
      category: "Lunch",
      rating: 4.2,
      totalOrders: 1456,
      interest: 26,
      progress: 70,
      image: "/assets/images/mixed-salad.png"
    },
    {
      id: 5,
      name: "Beef Meatball with Vegetable",
      category: "Snack",
      rating: 4.5,
      totalOrders: 1456,
      interest: 26,
      progress: 50,
      image: "/assets/images/beef-meatball.png"
    }
  ];

 const filteredData = React.useMemo(() => {
  switch (activeMenu) {
    case "snack":
      return foodItemsData.filter((x) => x.category.toLowerCase() === "snack");
    case "bf":
      return foodItemsData.filter((x) => x.category.toLowerCase() === "breakfast");
    case "lunch":
      return foodItemsData.filter((x) => x.category.toLowerCase() === "lunch");
    default:
      return foodItemsData;
  }
}, [activeMenu]);
  
  return (
    <div className='flex-1 flex flex-col space-y-3 md:space-y-7 min-h-0 h-full m-0'>
      <div>
        <GeneralHeader title={"Food"} />
      </div>

      <div className='bg-white p-5 flex min-h-0 flex-col justify-between flex-1 rounded-xl'>
        <div className='flex flex-col flex-1 min-h-0 space-y-5'>
          <div className='flex justify-between'>
            <div className='font-bold text-primary-text text-lg'>Food Menu</div>

            <div className='relative flex space-x-2  px-3'>
              <div className='absolute w-full h-0.5 bg-grey-200/50 bottom-0 left-0'></div>
              <div onClick={() => setActiveMenu("all")}
                className={`text-xs p-3 cursor-pointer z-10 ${activeMenu == "all" ? "text-primary border-b-3 border-primary" : "text-grey-300"}`} >All Menus</div>
              <div onClick={() => setActiveMenu("bf")}
                className={`text-xs p-3 cursor-pointer ${activeMenu == "bf" ? "text-primary border-b-3 z-10 border-primary" : "text-grey-300"}`} >Breakfast</div>
              <div onClick={() => setActiveMenu("lunch")}
                className={`text-xs p-3 cursor-pointer ${activeMenu == "lunch" ? "text-primary border-b-3 z-10 border-primary" : "text-grey-300"}`} >Lunch</div>
              <div onClick={() => setActiveMenu("snack")}
                className={`text-xs p-3 cursor-pointer ${activeMenu == "snack" ? "text-primary border-b-3 z-10 border-primary" : "text-grey-300"}`} >Snacks</div>

            </div>
          </div>

          <div className='flex flex-col space-y-5 flex-1 min-h-0 overflow-auto scrollbar-thin'>
            {filteredData.map((data) => <FoodRow key={data.id} type={data.category} noOfOrder={data.totalOrders}
              interest={data.interest} name={data.name} rating={data.rating} percentage={data.progress} />)}
          </div>
        </div>

        {/* Footer */}
        <div>
          <div className='flex justify-between items-center mt-3 w-full'>
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

      </div>
    </div>
  )
}

export default FoodPage