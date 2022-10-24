import { useState } from 'react';

export function MessageList() {

    const [messages, setMessages] = useState('');

    const changeMessage = (event) => {
        setMessages(event.target.value)
    };

    return (
        <>
            <p className="paragpHmw">Второе дз:</p>
            <form>
                <input placeholder='author' onChange={changeMessage} />
                <br />
                <input placeholder='text' />
                <button type='button'>Отправить</button>
                <p>{messages}</p>
            </form>
        </>
    );
}

// export function MessageList(props) {
//     return <>
//         <p>{props.messages}</p></>
// }

// import React, { useState } from 'react';

// export function MessageList() {
//     const [messages, setMessages] = useState([
//         "message 1"
//     ]);

//     return (
//         <form onSubmit={submitForm}>
//             <input placeholder='Имя' value={text} onChange={(e) =>
//                 setData(pervstate => ({ ...pervstate, text: e.target.value })
//                 )} />
//             <button type='submit'>Отправить</button>
//         </form>
//     )
    // return messages.map((message) => <div className='paragph3'>{message}</div>);

// }

// export function MessageList = ({ data, setData, setMessage }) => {
//     const { text, author } = data;
//     const submitForm = (event) => {
//         event.preventDefault()
//         if (text.length > 0) {
//             setMessage(pervstate => [...pervstate, { text, author }])
//         }
//         setData(
//             {
//                 text: '',
//                 author: ''
//             }
//         )
//     }

//     return (
//         <form onSubmit={submitForm}>
//             <input placeholder='Имя' value={text} onChange={(e) =>
//                 setData(pervstate => ({ ...pervstate, text: e.target.value })
//                 )} />
//             <input placeholder='Текс' value={author} onChange={(e) =>
//                 setData(pervstate => ({ ...pervstate, author: e.target.value })
//                 )} />

//             <button type='submit'>Отправить</button>
//         </form>
//     )
// }

