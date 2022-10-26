import React, { useState, useEffect } from 'react';
import './App.css';

function getEmptyObj() {

  const emptyObj = {
    id: 'id', // генерируем уникальный id
    author: 'author',
    text: 'text',
  };

  return emptyObj;
}

const mouseText = [
  {
    id: '0',
    author: 'Alex',
    text: 'text'
  },
  {
    id: '1',
    author: 'Max',
    text: 'text'
  },
];



function App() {
  const [objArr, setValue] = useState(mouseText);
  const [obj, setObj] = useState(mouseText);

  function add() {
    setValue([...objArr, obj]);  // добавление объекта к массиву
    setObj(getEmptyObj()); // сохранение пустого объекта в стейт
  }

  function change(prop, event) { // изменение свойства при вводе
    setObj({ ...obj, [prop]: event.target.value });
  }

  const RobotAnswer = 'Сообщение получено';

  useEffect(() => {
    if (obj.length > 0 && obj[0].author !== 'robot') {
      setTimeout(() => {
        obj(pervstate => [...pervstate, { text: RobotAnswer, author: 'robot' }])
      }, 1500)
    }
  }, [obj])



  const result = objArr.map((obj) =>  // вывод сохранённого массива объектов
    <div key={obj.id}>
      <h4 className='id'>{obj.id}</h4>
      <h7 className='author'>{obj.author}</h7>
      <p>{obj.text}</p>
    </div>

  );

  return <div>
    {result}

    <br />
    <input value={obj.id} onChange={event => change('id', event)} />
    <input value={obj.author} onChange={event => change('author', event)} />
    <input value={obj.text} onChange={event => change('text', event)} />

    <br />
    <button onClick={add}>Добавить объект</button>

  </div>;
}

export default App;

// import './App.css';
// import { Message } from './components/Message';
// import { useState } from 'react'
// import { MessageList } from './components/messageList';
// // import { Form } from './components/Form';


// function App() {
//   const [name, setName] = useState('');

//   const [user, setUser] = useState([
//     {
//       id: '0',
//       author: 'Alex',
//       text: 'ere'
//     },
//     {
//       id: '1',
//       author: 'Max',
//       text: 'ere'
//     },
//     {
//       id: '2',
//       author: 'Michael',
//       text: 'rer'
//     }
//   ]);

//   const changeName = (event) => {
//     setName(event.target.value)
//   };

//   const changeUser = (prop, event) => {
//     setUser({ user, [prop]: event.target.value });
//   }

//   const RobotAnswer = 'Сообщение получено';

//   return (
//     <div className="App">
//       <p className="paragpHmw">Первое дз:</p>
//       <p className="paragp">Родитель</p>
//       <input onChange={changeName} />
//       <p className="paragp">Дочерний компонент</p>
//       <Message name={name} />
//       <hr />
//       <br />
//       <p className="paragpHmw">Второе дз:</p>
//       <input value={user[0].text} placeholder='text' onChange={event => setUser(user[0].text, event)} />
//       {user.map((e) =>
//         <>
//           <h4 className='id'>{e.id}</h4>
//           <h7 className='author'>{e.author}</h7>
//           <p>{e.text} </p>
//         </>
//       )}
//     </div >
//   );

// }



// export default App;

