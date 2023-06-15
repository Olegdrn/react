
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import { Form } from './components/reactFunction/Form'
import { Count } from './components/reactFunction/Count'
import { Child } from './components/reactFunction/Child'
import { MessageList } from './components/messageList/MessageList'
import { Palette } from './components/Theme';
import { Navbar } from './components/Navbar';
import { Parent } from './components/reactFunction/Parent';
import { BlogForm } from './components/blog/BlogForm';
import { BlogList } from "./components/blog/BlogsList";
import { BlogDetails } from "./components/blog/BlogDetails";

export function App() {
  const [name, setName] = useState(0)
  const [data, setData] = useState(0)

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/chats' element={<MessageList />} />
        </Routes>

        <Routes>
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/' element={<BlogForm />} />
        </Routes>

        <Routes>
          <Route path='/reactTest' element={<Count />} />
        </Routes>
        <Routes>
          <Route path='/reactTest' element={<Parent handleChangeName={handleChangeName} />} />
        </Routes>
        <Routes>
          <Route path='/reactTest' element={<Form name={name} ChangeName={setName} />} />
        </Routes>
        <Routes>
          <Route path='/reactTest' element={<Child handleChangeData={setData} data={data} />} />
        </Routes>
        {/* <Palette /> */}
      </BrowserRouter>
    </div >
  );
}
