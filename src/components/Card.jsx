/* card:{
image,
prodName,
description,
rating,
buynow button
}
*/

import { IMAGE_URL } from "../utils/utils"


export const Card = ({ resData}) => {
  if (!resData) return null;
  // console.log(\resData?.aggregatedDiscountInfoV3)
  const {
    header,
    subHeader,
  } = resData?.aggregatedDiscountInfoV3 || {}

  const {
    sla,
    avgRating,
    name,
    cuisines,
    areaName
  } = resData 
  return (
    
    <div className="Card  w-55 h-6 rounded-2xl mb-50 mt-10 hover:border-7 border-solid border-white ">
          <div className="Image relative h-35 ">
        <img src={IMAGE_URL+resData?.cloudinaryImageId} alt=""
                  className="w-full  object-cover object-center rounded-xl h-full  "
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/100 to-transparent  rounded-xl h-15 text-white text-xl font-bold flex items-end py-2 pl-1">
          {header && subHeader && (
            <h3>{header} {subHeader}</h3>
          )}
              </div>
          </div>
          <div className="Card_footer mx-3 mt-1 ">
              <h3 className="font-bold text-lg truncate">{name}</h3>
              <h3 className="font-medium "><span className="text-green-600">✪</span> {avgRating}<span className="font-bold "> :{sla?.slaString}</span></h3>
              {/* <h3>description</h3> */}
        <h3 className="text-gray-400 font-medium truncate">{cuisines.join(', ')}</h3>
              <h3 className="text-gray-400 font-medium ">{areaName}</h3>
          </div>
    </div>
  )
}
