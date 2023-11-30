import React, { useState } from 'react'

const CounterProject = () => {
    const [counter, setCounter] = useState(0);
const addValue =(e)=>{
e.preventDefault()
setCounter(counter+1)
}
const removeValue =(e)=>{
e.preventDefault()
setCounter(counter-1)
}
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <div className="contents">

        <h1 className='text-[28px] text-center font-bold'>Counter using use state hook</h1>
<h2>Counter value : { counter} </h2>
        </div>
<div className="btns">

        <button className='bg-slate-500 p-2 text-white m-2 rounded-lg' onClick={addValue}>Add value</button>
        <button className='bg-slate-500 p-2 text-white m-2 rounded-lg' onClick={removeValue}>Remove value</button>
</div>
    </div>
  )
}

export default CounterProject