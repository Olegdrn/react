import { Link } from "react-router-dom"
export function Navbar() {

  return <>
    <div className="NAVBAR">
      {/* <div ><Link to="/chats"> Chats</Link > */}
      <div className="Blogs">
        <div><Link to="/blogs" style={{ color: "#f1356d" }}> Blogs</Link ></div>
      </div>
      <div className="reactTest">
        <Link to="/reactTest" style={{ color: "#f1356d" }}> React test</Link >
      </div>
      <div className="Chats">
        <Link to="/Chats" style={{ color: "#f1356d" }}> Chats</Link >
      </div>
    </div>
    <hr />
    {/* <Link to="/"> Home</Link > */}
    {/* </div > */}
  </>
}