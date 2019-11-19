import React, { useContext, useEffect } from 'react'
import { CTX } from '../Store'
import ChatBubble from './ChatBubble'
import { fetchMessages } from '../services/api'

let _isMounted = false

const ConvoContainer = () => {

    const [ state, action ] = useContext(CTX)

    // useEffect(() => {
    //     _isMounted = true
    //     handleFetchMessages()
    //     return () => {
    //         _isMounted = false
    //     };
    // }, [])

    return(
        <div className="convo-container">
            {!!state && state.messages.length > 0 && state.messages.map((msg, ind) => <ChatBubble key={ind} msg={msg}/>) }
        </div>
    )
}

export default ConvoContainer