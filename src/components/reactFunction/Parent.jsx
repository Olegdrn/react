export function Parent(props) {


  return <>
    <h2 style={{ color: "red" }}>Components interaction</h2>
    <h4>Parent component</h4>
    <input type="text" onChange={props.handleChangeName} />

  </>
}
