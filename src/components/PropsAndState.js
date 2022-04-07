import React, { useState } from "react"
import { MyCheckBox } from "./checkBox"

export const PropsAndState = ({ yourName, myCohort }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
  return (
    <>
      <h3>Welcome, {yourName} proud member of NSS {myCohort}</h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me!</button><br/>
      <MyCheckBox />
    </>
  )
}
