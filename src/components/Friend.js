import React from 'react'
import '../css/Contact.css'


const Friend = (props) => {

    const { user } = props
    return(
        <div className="friend-container">
            <img src="https://picsum.photos/70" alt="contact avatar" className="avatar-img"/>
            <h4 style={{paddingLeft: "20px"}}>{user.name}</h4>
        </div>
    )
}

export default Friend