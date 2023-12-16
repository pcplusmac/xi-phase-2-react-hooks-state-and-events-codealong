import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true)

  
  const color = isOn ? "red" : "green"

  function handleClick() {
    setIsOn((isOn) => !isOn)

  }
  

  return (
    <div>
      <button style={{ color }} onClick={handleClick}>{isOn ? "OFF" : "on"}</button> <br /> <br />
      
    </div>
  )
}

export default Toggle;
