import { useState } from "react";
import style from './style/BlogForm.module.css';

import { useNavigate } from "react-router-dom"

export function BlogForm() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('first author');
  const [isPending, setIsPending] = useState(false)
  const history = useNavigate();

  const hadleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true)
    // setTimeout(() => {
    //   console.log(blog)
    //   setIsPending(false)
    // }, 1000);
    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blod added');
      setIsPending(false);
      history('/blogs');
    })
  }

  return <>
    <div className={style.blogName} >
      <h4>Add a New Blog</h4>
      <form className={style.blogForm} onSubmit={hadleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        >
        </textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value="firstAuthor"> first author</option>
          <option value="secondAuthor"> second author</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
      <hr />
    </div >

  </>
}