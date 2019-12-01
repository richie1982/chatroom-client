import React, { useContext, useState, useEffect } from 'react'
import { sendInvite } from '../services/api'
import { CTX } from '../Store'
import '../css/Contact.css'

const Contact = (props) => {

    const { user, setResults } = props

    const [ state ] = useContext(CTX)
    const [ friend, setFriend ] = useState(false)
    const [ pending, setPending ] = useState(false)

    const handleInvite = () => {
        sendInvite(user._id)
            .then(data => {
                if (data.error) return alert(data.error)
                setResults(null)
            })
    }

    const checkContact = () => {
        if (!!state) {
            !!state.friends.find(el => el._id === user._id)
                && setFriend(true)
        
            !!state.pending.find(el => el === user._id)
                && setPending(true)
        }
    }
    
    useEffect(() => {
        checkContact()
        return () => {
            setFriend(false)
            setPending(false)
        }
    }, [state])

    return(
        <div className="contact-container">
            <img src="https://picsum.photos/70" alt="contact avatar" className="avatar-img"/>
            <h4>{user.name}</h4>
            <div
            className={"contact-right-div"}
            >
                {!pending && !friend
                    ? <button 
                    type="submit"
                    className="contact-button"
                    onClick={handleInvite}
                    >
                    Invite
                    </button>
                    : !!pending 
                        ? <p>Invite sent...</p>
                        : <p>Already in contacts...</p>
                }

            </div>
        </div>
    )
}

export default Contact