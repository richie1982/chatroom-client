import React, { useContext } from 'react'
import { CTX } from '../Store'
import '../css/UserPage.css'

const Header = (props) => {

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
    }

    const [ state ] = useContext(CTX)

    return(
        <div className="header">
            <div style={style}>
                <img className="avatar-img" alt="profile" src="https://api.adorable.io/avatars/60/abott@adorable.png"/>
                {state && <h2 style={{paddingLeft: "10px"}}>{state.name}</h2>}
            </div>
            <div>
                {props.signOutButton()}
            </div>
        </div>
    )
}

export default Header