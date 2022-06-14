import React,{useState,useEffect} from 'react'

function Counter() {
   useEffect(()=>{
       console.log('mounting...');
       return(()=>{
           console.log('unMounting...');
       })
   },[])
   const [count,setCounter]=useState(0);
  return (
    <div>
        <button onClick={()=>setCounter(count+1)}>click me!</button>
      <h1>Hi i'm Here{count}</h1>
    </div>
  )
}

export default Counter
