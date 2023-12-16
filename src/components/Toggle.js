import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn]= useState(true)

  const color = isOn ? "red" : "green"

  function handleClick(){
    setIsOn((isOn) => !isOn)
  }

  return <button style={{color}} onClick={handleClick}>{isOn ? "OFF": "on"}</button>;
}

export default Toggle;
