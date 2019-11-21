import React, { useContext, useState, useEffect } from 'react'
import { CTX } from '../Store'
import ChatBubble from './ChatBubble'

const ConvoContainer = () => {

    const [ state ] = useContext(CTX)

    const [ messages, setMessages ] = useState()

    const filterChat = () => {
        if (!!state && !!state.selected) {
            const arr = state.messages.filter(msg => !!msg.users.find(user => user === state.selected[0]._id))
            setMessages(arr.map(msg => msg.messages).flat().sort((a,b) => a.date - b.date))
        }
    }

    useEffect(() => {
        filterChat()
    }, [state])

    return(
        <div className="convo-container">
            {!!messages && messages.map((msg, ind) => <ChatBubble key={ind} msg={msg}/>) }
        </div>
    )
}

export default ConvoContainer