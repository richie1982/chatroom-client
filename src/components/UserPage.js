import React, { useContext } from 'react'
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