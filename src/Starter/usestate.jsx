import React from 'react'
import { useState } from 'react';

const usestate = () =>{

const [count, setCount] = useState(0);
const handleClick = () => {
    setCount(count+1);
}

  return (
    <div>
    <h4>You Clicked {count} times</h4>
<button type='button' className='btn' onClick={handleClick}>
    Click me
</button>
    </div>
  )
}
export default usestate;