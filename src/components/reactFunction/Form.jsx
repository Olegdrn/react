
// const changeName = (ev) => {
//   setState({ name: ev.target.value })
// }
import style from './style/Form.module.css'
export const Form = (props) => {

  return <>
    <h4>Child component</h4>
    <form className={style.form} onSubmit={props.ChangeName}>
      <p>{props.name}</p>
    </form>
    <hr />
  </>
}