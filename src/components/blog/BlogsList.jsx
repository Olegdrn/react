import style from './style/BlogList.module.css';
import { Link } from "react-router-dom";
import { UseFetch } from "../useFetch";




export function BlogList() {


  const { data: blogList, error, isLoading } = UseFetch('http://localhost:8000/blogs');

  //Рендер компонентов

  return <>

    <div className={style.blogHeader}>
      <div className={style.rightNav}><Link to="/blogs" style={{ color: "grey" }}> All blogs</Link ></div>
      <div className={style.rightNav}><Link to="/" style={{ color: "grey" }}> Add blog</Link ></div>
    </div>
    <div className={style.blogList}>
      <h1>Blogs:</h1>
      <hr />
      {error && <div>Could not fetch the data</div>}
      {isLoading && <div>is Loading...</div>}
      {blogList && blogList.map((blog, id) => <div className={style.blog} key={blog.id} >
        <Link to={`/blogs/${blog.id}`}>
          {/* <h1>{item.id}</h1> */}
          <h2>{blog.title}</h2>
          <h4> Written by {blog.author}</h4>
          <p>{blog.body}</p>
        </Link>
      </div>)}
    </div >
  </>
}
