import React, { useEffect, useState } from 'react'

 const HelloWorld = () => {
    let [count, setCount] = useState(2)
    useEffect(()=>{
        setCount(count*count)
    },[])
  return (
    <div >
        <button onClick={()=>setCount(count+1)}>+</button>
        {count}
    </div>
  )
}
export default HelloWorld