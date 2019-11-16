import React, { useContext } from 'react'
// import { fetchUser } from '../services/api'
import { CTX } from '../Store'
import '../css/UserPage.css'

const UserPage = (props) => {

    const [ state, action ] = useContext(CTX)

    const handleSignOut = () => {
      action({type: "REMOVE_USER"})
      localStorage.removeItem('token')
      props.history.push('/')
    }
    
    return(
        <div className="container">
            <div>
                <h1>
                    {state && state.name}
                </h1>
            </div>
            <button
            className="button"
            onClick={handleSignOut}
            >
            Sign Out
            </button>
            <div>

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


{/* <div style={style}>
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
      </div> */}