import React, { useState } from 'react';
import io from 'socket.io-client'



const style = {
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  flexDirection: 'column',
}

let socket

const sendChat = (msg) => {
  socket.emit('chat-message', msg)
}

function App() {

  if (!socket) {
    socket = io(':3001')
  }
  const [ textValue, setTextValue ] = useState("")

  const handleSubmit = (msg) => {
    sendChat(msg)
  }

  return (
    <div style={style}>
      <h3>Chatroom</h3>
      <form>
        <input type="text"
        onChange={(e) => setTextValue(e.target.value)}
        value={textValue}
        ></input>
        <button
          type="submit"
          onClick={() => handleSubmit(textValue)}
        >Send</button>
      </form>
    </div>
  );
}

export default App;
