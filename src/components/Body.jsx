import { Card } from "./Card"

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
  return (
    <div className="Body mx-32 mt-5 ">
      <div className="Search">
        <input></input>
      </div>
      <div className="Restaurant_container grid grid-cols-4 gap-4">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}
