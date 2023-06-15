import { useEffect, useState } from "react";
import { Chats } from './Chats';
import style from './MessageList.module.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';



export function MessageList() {

  const [messageList, setmessageList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const data = "https://raw.githubusercontent.com/Olegdrn/jsonBase/main/responses/data.json"

  //Вариант с async await: 
  // useEffect(async () => {
  //   const dataJson = await fetch(data);
  //   const finalData = await dataJson.json();
  //   setmessageList(finalData);
  //   setIsLoading(false);
  // }, []);

  //Вариант с then: 
  useEffect(() => {
    setTimeout(() => {
      fetch(data)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          setmessageList(res);
          setIsLoading(false);
        })
        .catch(error => {
          setError(true)
        })
    }, 1500);
  }, [])

  //Кнопки удаления и добавления
  function RemoveObj(id) {
    const newObj = messageList.filter((Obj) =>
      Obj.id !== id
    )
    setmessageList(newObj)
  }

  function AddObj() {
    setmessageList(pervstate => [...pervstate, { id: 4, text: "fourthMessage", author: 'robot' }])
  }

  // массив персон

  const [chatsList, setchatsList] = useState([
    {
      id: 1,
      name: ' first',
      icon: <ArrowDownwardOutlinedIcon color="secondary" />
    },
    {
      id: 2,
      name: ' second',
      icon: <ArrowDownwardOutlinedIcon color="secondary" />
    }
  ]);

  //Рендер компонентов

  return <>
    <div className={style.chats}>

      <div className={style.leftSide}>
        <Chats chatsList={chatsList} />
      </div>
      {error && <div>Could not fetch the data</div>}
      {isLoading && <div>is Loading...</div>}
      <div className={style.messageList}>
        {messageList && messageList.map((item, i) => <div key={i} className={style.text}> <span style={{ color: "red" }}>text:</span>  {item.text}
          <span style={{ color: "green" }}> author:</span> {item.author}
          <hr />
          <button onClick={() => RemoveObj(item.id)}>REMOVE</button>
        </div>)}
        <button type='button' onClick={AddObj}>ADD</button>
      </div >
    </div >
  </>
}





  // useEffect(() => {
  //   setmessageList(pervstate => [...pervstate, messageListObj])
  //   // if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
  //   //   setTimeout(() => {
  //   //     setmessageList(pervstate => [...pervstate, { text: firstMessage, author: 'robot' }])
  //   //   }, 1500)
  //   // }
  // }, [])