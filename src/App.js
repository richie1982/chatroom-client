import React, { useState } from 'react';
import { sendChat } from './services/server'

const style = {
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  flexDirection: 'column',
}

const App = () => {

  let user = "richie"

  const [ textValue, setTextValue ] = useState("")

  const handleSubmit = (user, msg) => {
    sendChat(user, msg)
    setTextValue("")
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
          onClick={(e) => {
            e.preventDefault()
            handleSubmit(user, textValue)
            }
          }
        >Send</button>
      </form>
    </div>
  );
}

export default App;
