import React, { useContext } from 'react'
import { CTX } from '../Store'

const ChatBubble = (props) => {

    const [ state ] = useContext(CTX)

    const style = {
        right: { alignSelf: "flex-end"},
        left: { alignSelf: 'flex-start'}
    }
    return(

        <div className="chat-bubble" style={props.msg.author === state._id ? style.right : style.left}>
            {props.msg.text}
        </div>
    )
}

export default ChatBubble