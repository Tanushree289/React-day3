import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
  return (
    <div style={{textAlign:"center"}}>
        <h3>Count: {count}</h3>
        <button style={{padding:"10px" , color:"red" , backgroundColor:"yellow"} } onClick={() => setCount(count + 1)}>Count</button>

    </div>
  )
}
export default UseState;
