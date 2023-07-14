import { useParams } from 'react-router-dom';
import style from './style/BlogDetails.module.css';
import { UseFetch } from '../useFetch';
import { useNavigate } from "react-router-dom";

export function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isLoading } = UseFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();
  console.log(id)


  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: "DELETE"
    }).then(() => {
      history('/blogs');
    })
  }

  return <>
    <div className={style.blogDetails}>
      {isLoading && <div>is Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article><h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div >
  </>
}