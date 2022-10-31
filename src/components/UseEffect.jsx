import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

 useEffect(() => {
        // alert(`You clicked ${count} times`);
        document.title = `You clicked ${count} times`;
      });
  return (
    <div style={{textAlign:"center"}}>
        <h5>You clicked {count} times</h5>
      <button style={{padding:"10px" , color:"red" , backgroundColor:"yellow"} } onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
export default UseEffect;
