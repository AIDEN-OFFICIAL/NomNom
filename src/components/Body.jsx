import { Card } from "./Card"
import mockData from '../Data/Mock.json'
import { useEffect, useState } from "react"
import { Carousel } from "./Carousel"
import Cat from '../Data/Category.json'
import  Filter from "./Filter"

/*body:{
search
restArant container:{ card:{
image,
prodName,
description,
rating,
buynow button
}
}
}*/
export const Body = () => {
  const [data, setData] = useState([])
  const [visibleCount, setVisibleCount] = useState(12);
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('All');
  //make this dynamic 
  useEffect(() => {
        const fetchData = async () => {
          // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=9.94060&lng=76.26530&carousel=true&third_party_vendor=1')
          const restaurants = mockData?.data?.cards
          // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING
          // setData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          // console.log(restaurants)
          setData(restaurants);
        
        }
    // const fetchData = async () => {
    //   const formated = mockData?.data?.cards || [];
    //   const filtered = formated.filter(x => {
    //     if (x?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
    //       return x?.card
    //   })
      // const filetrByCat = filtered.filter((x) => {
      //   if (category == 'All')return true
      //     for (let elem of Cat[category]) {
      //       if (x?.card?.card?.info?.cuisines.includes(elem)) {
      //        return x
      //      }
      //     }
      //   })
      // setData(filetrByCat)
      // }
      console.log(category);
      
    fetchData()
  },[category])
  return (

    <div className="Body mx-32 mt-3  ">
      <div className="Search">
        <input></input>
      </div>
      <Carousel set={setCategory} val={category} />
      <hr className='mt-10 mb-0 w-[98%] text-gray-300'></hr>
      <Filter/>
      <div className="Restaurant_container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
        {data.slice(0,visibleCount).map(x => {
          {console.log(x?.card?.card?.info?.name)}
          console.log(visibleCount,)
         return <Card resData={ x?.card?.card?.info} key={x?.card?.card?.info?.id}/>
        //  return <Card resData={ x?.info} key={x?.info?.id}/>
        }) 
        }
      </div>
            {visibleCount < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={()=>setVisibleCount(prev=>prev+12)}
            className="bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Show More ↓
          </button>
        </div>
      )}
    </div>
  )
}
