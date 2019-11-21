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
    }

    useEffect(() => {
        !!state && !!state.selected && user._id === state.selected[0]._id
            && setSelected(true)
            console.log("hi")
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