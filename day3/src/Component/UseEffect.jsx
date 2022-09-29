import React from 'react'
import { useState,useEffect } from 'react';
import './Style.css'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(5);
    

    function updateCount(){
        setCount(count+1)
    }

    function updateCount1(){
        setCount1(count1-1)
    }
    useEffect(() => {
        console.warn("useEffect called");
    },[count])
  return (
    <div>
        <h3>Question3:What is useEffect Hook ?(Implementation)?</h3>
        <p className='que1'> UseEffect :useEffect hook is designed to use lifecycle method in the functional component.</p> 
        <p className='que1'>UsEffect hook gets triggered for the componentDidMount.componentDidUpdate and componentUnWillMOunt lifecycle.</p>
        <h5>Implemenation</h5> 
        <h1>IncrementCount : {count}</h1>
        <button onClick={updateCount}> update Me</button><br></br>
        <h1>DecrementCount : {count1}</h1>
        <button onClick={updateCount1}> update Me</button>
    </div>
  )
}

export default UseEffect