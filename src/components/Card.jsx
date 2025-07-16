/* card:{
image,
prodName,
description,
rating,
buynow button
}
*/

export const Card = () => {
  return (
    <div className="Card  w-55 h-6 rounded-2xl mb-33 mt-25 hover:border-1 border-solid border-black m-1">
          <div className="Image relative h-35 ">
              <img src="../../public/Food4.avif" alt=""
                  className="w-full  object-cover object-center rounded-xl h-full  "

              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/100 to-transparent  rounded-xl h-15 text-white text-xl font-bold flex items-end p-2">
              <h3>ITEMS AT ₹105</h3>
              </div>
          </div>
          <div className="Card_footer mx-3 mt-1 ">
              <h3 className="font-bold text-lg ">Domino's Pizza</h3>
              <h3 className="font-medium "><span className="text-green-600">✪</span> 4.3<span className="font-bold "> :20-25 mins</span></h3>
              {/* <h3>description</h3> */}
        <h3 className="text-gray-400 font-medium">Pizzas, Italian, Pastas...</h3>
              <h3 className="text-gray-400 font-medium ">M G Road</h3>
          </div>
    </div>
  )
}
