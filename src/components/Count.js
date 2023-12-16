import React, { useState } from "react";

function Count(){
    // const [count, setCount] = useState(0)
  const [count, setCount] = useState({x:0})


  function handleCountClick() {
    console.log(count.x)
    setCount({x: count.x + 1})
    count.x++
    // setCount(count)
    console.log("after click", count.x)
  }
    return (
        <div>
            <button onClick={handleCountClick}>{count.x}</button>
         {/* <button onClick={handleCountClick}>{count.x}</button> */}
        </div>
    )
}

export default Count;
