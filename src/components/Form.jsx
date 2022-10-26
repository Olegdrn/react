import React, { useState } from 'react';

// export function Form = ({ data, setData, setMessage }) => {
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
