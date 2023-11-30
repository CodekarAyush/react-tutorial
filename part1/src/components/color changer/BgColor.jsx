import React, { useState } from 'react'

const BgColor = () => {
    const [color,SetColor] = useState('olive')
const BgColor = (e)=>{
    e.preventDefault()
 SetColor(e.target.textContent );
}
    return (
    <div className='h-screen w-full duration-200' style={{backgroundColor: color}}>
      
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 px-2 py-2 rounded-2xl ">
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'red'}}>Red</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'yellow'}}>yellow</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'cyan'}}>cyan</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'blue'}}>blue</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'teal'}}>teal</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'green'}}>green</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'black'}}>black</button>
    <button className='outline-none px-4 rounded-full shadow-sm text-white' onClick={e=>BgColor(e)} style={{backgroundColor:'brown'}}>brown</button>
</div>
</div>
    </div>
  )
}

export default BgColor