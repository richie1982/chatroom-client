import React, { useState, useContext } from 'react'
import { CTX } from '../Store'
import '../css/ChatTerminal.css'
import ConvoContainer from './ConvoContainer'

const ChatTerminal = () => {

    const [ , action ] = useContext(CTX)

    const [ message, setMessage ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return(
        <div className="chat-container">
            <h3>ChatTerminal</h3>
            <ConvoContainer/>
            <div className="chat-input-container">
                <input
                className="chat-input"
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                    onSubmit={null}
                    value={message}
                    placeholder="Enter Msg..."
                />
            </div>
        </div>
    )
}

export default ChatTerminal