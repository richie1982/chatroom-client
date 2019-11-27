import React, { useState, useContext, useEffect } from 'react'
import { CTX } from '../Store'
import '../css/ChatTerminal.css'
import ChatBubble from './ChatBubble'
import io from 'socket.io-client'
import { postMessage, addMessage } from '../services/api'

let socket

const ChatTerminal = () => {

    const [ state, action ] = useContext(CTX)
    const [ message, setMessage ] = useState("")
    const [ allMessages, setAllMessages ] = useState([])

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
        socket.emit('chat-message', obj)
      }

    socket.on('chat-message', msg => {
        if (!!state) {
            if (msg.msgId === state.msgId) {
                setAllMessages([msg,...allMessages])
            }
        }
    })

    // const postToDB = () => {
    //     if (!state.msgId) {
    //         postMessage(message, state._id, state.selected[0]._id)
    //             .then(data => {
    //                 action({type: "SELECT_CONV", payload: data._id})
    //             })
    //     } else {
    //         addMessage(state._id, state.msgId, message)
    //             .then(data => {
    //                 action({type: "SELECT_CONV", payload: data._id})
    //                 sendChat(state._id, data._id, message)
    //             })  
    //     }
    // }
      
    const handleSubmit = (e) => {
        e.preventDefault()
        sendChat(state._id, state.msgId, message)
        setMessage("")
        // postToDB()
    }

    const filterChat = () => {
        if (!!state && !!state.selected) {
            const chat = state.messages.find(msg => !!msg.users.find(user => user === state.selected[0]._id))
            !!chat && setAllMessages(chat.messages.reverse())
        }
    }

    useEffect(() => {
        filterChat()
    }, [])

    return(
        <div className="chat-container">
            <div className="convo-container">
            {!!allMessages && allMessages.map((msg, ind) => <ChatBubble key={ind} msg={msg}/>) }
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