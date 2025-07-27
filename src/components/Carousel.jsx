import React from 'react'

export const Carousel = ({ set, val }) => {
    // console.log(val);
    
  return (
    <div className='w-[98%] carousel mt-18 flex overflow-x-auto whitespace-nowrap scrollbar-hide'>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" className='h-35 w-auto mr-9' alt="" onClick={()=>set('Biriyani')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Burger')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Noodles')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Parotta')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Shawarma')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Pizza')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Rolls')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Dosa')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Shake')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Salad')}/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png" className='h-35 w-auto mr-9 ' alt="" onClick={()=>set('Pasta')} />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" className='h-35 w-auto mr-9 ' alt=""  onClick={()=>set('Paratha')}/>
    </div>
  )
}
