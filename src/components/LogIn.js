import React, { useState } from 'react'
import { logIn } from '../services/api'
import '../css/SignUp.css'

const LogIn = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(email, password)
    }


    return(
        <div className="container">
            <h1>Log In</h1>
            <form className="form">
                <input 
                    type="text" 
                    label="email" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="input"
                />
                <input 
                    type="password" 
                    label="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    className="input"
                />
                <button 
                    onClick={e => handleSubmit(e)}
                    className="button"
                >
                Submit
                </button>
            </form>
        </div>
    )
}
export default LogIn