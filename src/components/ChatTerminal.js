import React, { useState, useContext, useEffect } from 'react'
import { CTX } from '../Store'
import '../css/ChatTerminal.css'
import ChatBubble from './ChatBubble'
import io from 'socket.io-client'
import { addMessage } from '../services/api'

let socket

const ChatTerminal = () => {

    const [ state ] = useContext(CTX)
    const [ message, setMessage ] = useState("")
    const [ allMessages, setAllMessages ] = useState()

    const formStyle = {
        width: '70%',
    }

    if (!socket) {
        socket = io(':3001')
        socket.on('connect', () => {
            console.log('socket connected', socket.connected)
        })
    }

    const sendChat = (author, msgId, text) => {
        const obj = {
            author,
            msgId,
            text,
        }
        !!msgId &&
            socket.emit('chat-message', obj)
      }

    socket.on('chat-message', msg => {
        if (!!allMessages) {
            if (msg.msgId === state.msgId) {
                setAllMessages([msg, ...allMessages])
            }
        }
    })
      
    const handleSubmit = (e) => {
        e.preventDefault()
        sendChat(state._id, state.msgId, message)
        addMessage(state._id, state.msgId, message)
        setMessage("")
    }

    useEffect(() => {
        !!state
            && setAllMessages(state.messages)
    }, [state])

    return(
        <div className="chat-container">
            <div className="convo-container">
            {!!allMessages
                 && allMessages.map((msg, ind) => <ChatBubble key={ind} msg={msg}/>) }
            </div>
            <div className="chat-input-container">
                <form 
                    style={formStyle}
                    onSubmit={(e) => handleSubmit(e)}>
                    <input
                        className="chat-input"
                        type="text"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        placeholder="Enter Msg..."
                    />
                </form>
            </div>
        </div>
    )
}

export default ChatTerminal