import React from 'react'
import { useState } from 'react';
import './Style.css'

const UseState = () => {
    const[count,setCount] = useState(0);

    function updateCount(){
        setCount(count+5)
    }
  return (
    <div>
        <h3>Question2:What is UseState Hook ?(Implementation)?</h3>
        <p className='que1'>UseEffect :useState is a hook that allow you to add the state to a functional component.</p>
        <p className='que1'>You can pass the initial state to the function and it return a variable with the current state value & another function to update the state value.</p>
        <h5>Implementation</h5>
        <button onClick={updateCount}>Click Here : {count}</button>
    </div>
  )
}

export default UseState