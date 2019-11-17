import React, { useContext } from 'react'
import { CTX } from '../Store'
import '../css/UserPage.css'

const Header = (props) => {

    const [ state ] = useContext(CTX)

    return(
        <div className="header">
            {state && <h1>{state.name}</h1>}
            {props.signOutButton()}
        </div>
    )
}

export default Header