import { useEffect } from "react";
import { useRef } from "react";


export const Child = (props) => {
  const changeData = (ev) => {
    props.handleChangeData(ev.target.value);
  }

  const Input = useRef(null)

  useEffect(() => {
    Input.current.focus()
  }, [])

  return <>
    <h2 style={{ color: "red" }}>Transfer from Child to Parent</h2>
    <h4>Parent</h4>
    <p style={{ backgroundColor: "grey" }}>{props.data}</p>
    <h4>Child</h4>
    <input ref={Input} type="text" onChange={changeData} />
    <hr />
  </>
}