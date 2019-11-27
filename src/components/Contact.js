import React, { useContext, useEffect } from 'react'
import { addFriend, sendInvite } from '../services/api'
import { CTX } from '../Store'
import '../css/Contact.css'

const Contact = (props) => {

    const { user, setResults } = props
    const [ , action ] = useContext(CTX)

    const handleInvite = () => {
        sendInvite(user._id)
            .then(data => {
                if (data.error) return alert(data.error)
                setResults(null)
            })
    }

    return(
        <div className="contact-container">
            <img src="https://picsum.photos/70" alt="contact avatar" className="avatar-img"/>
            <h4>{user.name}</h4>
            <button 
            type="submit"
            className="contact-button"
            onClick={handleInvite}
            >
            Invite
            </button>
        </div>
    )
}

export default Contact