import React, { useContext, useState, useEffect } from 'react'
import '../css/Contact.css'
import { CTX } from '../Store'


const Friend = (props) => {

    const [ state, action ] = useContext(CTX)
    const [ selected, setSelected ] = useState(false)

    const style = {
        opacity: "0.5",
    }

    const { user } = props

    const handleClick = () => {
        action({ type: "SELECT_RECIPIENT", payload: user })
        const chat = state.messages.find(msg => msg.users.find(id => id === user._id))
        !!chat ? action({ type: "SELECT_CONV", payload: chat._id}) : action({ type: "CLEAR_CONV" })
    }

    useEffect(() => {
        !!state && !!state.selected && user._id === state.selected[0]._id
            && setSelected(true)
        return () => {
            setSelected(false)
        }
    }, [state])

    return(
        <div
        className="friend-container"
        style={!!selected ?style :null}
        onClick={handleClick}
        >
            <img src="https://picsum.photos/70" alt="contact avatar" className="avatar-img"/>
            <h4 style={{paddingLeft: "20px"}}>{user.name}</h4>
        </div>
    )
}

export default Friend