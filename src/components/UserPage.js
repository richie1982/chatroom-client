import React, { useContext, useEffect } from 'react'
// import { fetchUser } from '../services/api'
import { CTX } from '../Store'
import '../css/UserPage.css'

const UserPage = () => {

    const [ state ] = useContext(CTX)
    
    useEffect(() => {
        console.log(state)
    }, [state])

    return(
        <div className="container">
            <div>
                <h1>
                    {state && state.name}
                </h1>
            </div>
            <div>

            </div>
        </div>
    )
} 

export default UserPage

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