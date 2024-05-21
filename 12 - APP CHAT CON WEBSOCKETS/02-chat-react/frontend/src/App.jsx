import { useState, useEffect } from 'react'
import './App.css'
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080')

function App() {
  
const [newMessage, setNewMessage] = useState('');
const [newUsername, setNewUsername] = useState(null);
const [messages, setMessages] = useState([]);

useEffect(()=>{
  if(!newUsername){
    const value = prompt('Username:');
    setNewUsername(value);
  } else {
    socket.on('messages', (data)=>{
      setMessages(data)
    })
  }
}, [])

const sendMessage = () =>{
  const message = {
    username: newUsername,
    message: newMessage
  };
  socket.emit('chat:message', message);
  setNewMessage('');
  socket.on('messages', (data)=>{
    setMessages(data)
  })
}

  return (
    <>
      <input type="text" value={newMessage} onChange={(e)=>{
        setNewMessage(e.target.value)
        // console.log(e.target);
        }}/>
      <button onClick={sendMessage}>SEND</button>
      <>
        {
          messages && messages.map((msg)=>{
            return <p><strong>{msg.username}</strong>: {msg.message}</p>
          })
        }
      </>
    </>
  )
}

export default App
