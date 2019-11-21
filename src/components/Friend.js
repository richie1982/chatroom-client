import React, { useContext } from 'react'
import '../css/Contact.css'
import { CTX } from '../Store'


const Friend = (props) => {

    const [ , action ] = useContext(CTX)

    const { user } = props
    const handleClick = () => {
        action({ type: "SELECT_RECIPIENT", payload: user })
    }

    return(
        <div 
        className="friend-container"
        onClick={handleClick}
        >
            <img src="https://picsum.photos/70" alt="contact avatar" className="avatar-img"/>
            <h4 style={{paddingLeft: "20px"}}>{user.name}</h4>
        </div>
    )
}

export default Friend