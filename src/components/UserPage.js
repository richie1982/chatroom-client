import React, { useContext } from 'react'
// import { sendChat } from '../services/server'
import { CTX } from '../Store'
import '../css/UserPage.css'
import FriendList from './FriendList'
import Header from './Header'
import ChatTerminal from './ChatTerminal'

const layout = {
  display: "flex",
  flexDirection: "row",
}

const UserPage = (props) => {

  const [ , action ] = useContext(CTX)

  const handleSignOut = () => {
    action({type: "REMOVE_USER"})
    localStorage.removeItem('token')
    props.history.push('/')
  }

  const signOutButton = () => {
    return (<button
            className="button"
            onClick={handleSignOut}
            >
            Sign Out
          </button>
    )
  }

    return(
        <div className="user-container">
            <Header signOutButton={signOutButton}/>
            <div style={layout}>
              <FriendList/>
              <ChatTerminal/>
            </div>
        </div>
    )
} 

export default UserPage

// const [ textValue, setTextValue ] = useState("")

// const handleSubmit = (user, msg) => {
//   sendChat(user, msg)
//   setTextValue("")
// }


/* <div style={style}>
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
      </div> */