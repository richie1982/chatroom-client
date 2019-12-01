import React, { useContext, useState, useEffect } from 'react'
import { fetchMessages } from '../services/api'
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
        fetchMessages(state._id, user._id)
            .then(data => {
                if (data.error) return alert(data.error)
                action({type: "SET_MSGID", payload: data[0]._id})
                action({type: "IMPORT_MESSAGES", payload: data[0].messages.sort((a,b) => {
                    return new Date(b.date) - new Date(a.date)
                })})
            })
    }

    useEffect(() => {
        !!state && !!state.selected && user._id === state.selected._id
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