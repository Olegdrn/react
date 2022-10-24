import './App.css';
import { Message } from './components/Message';
import { useState } from 'react'
import { MessageList } from './components/messageList';
// import { Form } from './components/Form';


function App() {
  const [name, setName] = useState('');
  const changeName = (event) => {
    setName(event.target.value)
  };


  const [user, setUser] = useState([{
    name: 'Alex'
  },
  { age: 23 }])

  return (
    <div className="App">
      {user[0].name}
      <br />
      {user[1].age}
      <p className="paragpHmw">Первое дз:</p>
      <p className="paragp">Родитель</p>
      <input onChange={changeName} />
      <p className="paragp">Дочерний компонент</p>
      <Message name={name} />
      <hr />
      <MessageList />
    </div >
  );
}

export default App;

