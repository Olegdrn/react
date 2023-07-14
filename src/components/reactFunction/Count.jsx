import { useState } from "react"



export function Count(props) {
  const [count, setCount] = useState(0);


  const handleClick = () => {
    setCount(count + 1)
  }

  return <>
    <h2 style={{ color: "red" }}>Counter from additional component</h2>
    <p> Count: {count}</p>
    <button type="button" onClick={handleClick}>click</button>
    <hr />
  </>
}