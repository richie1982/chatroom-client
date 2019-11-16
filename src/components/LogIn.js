import React, { useState, useContext } from 'react'
import { logIn } from '../services/api'
import { CTX } from '../Store'
import '../css/SignUp.css'


const LogIn = (props) => {

    const [ , dispatch ] = useContext(CTX)

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleLogin = () => {
        logIn(email, password)
            .then(data => {
                if (data.error) return alert(data.error)
                console.log(data)
                dispatch({type: "ADD_USER", payload: data})
                props.history.push(`/${data._id}`)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
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