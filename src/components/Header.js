import React, { useContext, useState } from 'react'
import { addFriend, declineInvite } from '../services/api'
import { CTX } from '../Store'
import '../css/UserPage.css'

const Header = (props) => {

    const [ state, action ] = useContext(CTX)
    const [ openModal, setModalOpen ] = useState(false)

    const contactImg = require('../imgs/contact-vector.png')

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
    }

    const imgStyle = {
        height: "40px",
        width: "40px"
    }

    const imgContainer = {
        default: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: "50px",
            width: "50px",
            borderRadius: '10px',
        },
        invite: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: "50px",
            width: "50px",
            borderRadius: '10px',
            background: "red",
            opacity: "0.5",
        }
    }

    const handleContact = () => {
        !!state.invites.length > 0 &&
            setModalOpen(!openModal)
    }

    const ContactInvite = (user, ind) => {

        const style = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }

        const handleAccept = (e) => {
            e.preventDefault()
            addFriend(user._id)
                .then(data => {
                    if (data.error) return alert(data.error)
                    action({type: "ADD_FRIEND", payload: data.friend})
                    action({type: "REMOVE_INVITE", payload: data.friend})
                })
        }

        const handleDecline = (e) => {
            e.preventDefault()
            declineInvite(user._id)
                .then(data => {
                    if (data.error) return alert(data.error)
                    action({type: "REMOVE_INVITE", payload: data})
                })
        }

        return(
            <div style={style} key={ind}>
                <p>{user.name}</p>
                <button
                    onClick={e => handleAccept(e)}
                >
                    Accept
                </button>
                <button
                    onClick={e => handleDecline(e)}
                >
                    Decline
                </button>
            </div>
        )
    }

    return(
        <div className="header">
            <div style={style}>
                <img className="avatar-img" alt="profile" src="https://api.adorable.io/avatars/60/abott@adorable.png"/>
                {state && <h2 style={{paddingLeft: "10px"}}>{state.name}</h2>}
            </div>
            <div style={!!state && !!state.invites  && state.invites.length > 0 ? imgContainer.invite : imgContainer.default}>
                <img
                style={imgStyle} 
                alt="contact-vector"
                src={contactImg}
                onClick={handleContact}
                />
            </div>
            <div>
                {!!openModal && !!state
                    && state.invites.length > 0
                        ? state.invites.map((el, ind) => ContactInvite(el, ind))
                        : null
                }
            </div>
            <div>
                {props.signOutButton()}
            </div>
        </div>
    )
}

export default Header