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

  return (
    <div className="App">
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

