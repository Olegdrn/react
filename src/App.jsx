import './App.css';
import { Message } from './components/Message';
import { useState } from 'react'



function App() {
  const [name, setName] = useState('');
  const changeName = (event) => {
    setName(event.target.value)
  };

  return (
    <div className="App">
      <p class="paragp">Родитель</p>
      <input onChange={changeName} />
      <p class="paragp">Дочерний компонент</p>
      <Message name={name} />
    </div>
  );
}



export default App;
