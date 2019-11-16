import React, { useState, useContext } from 'react'
import { signUp } from '../services/api'
import { CTX } from '../Store'
import '../css/SignUp.css'

const SignUp = (props) => {

    const [ , action ] = useContext(CTX)

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(name, email, password)
            .then(data => {
                if (data.error) return alert(data.error)
                localStorage.setItem('token', data.token)
                action({ type: "ADD_USER", payload: data })
                props.history.push(`/${data._id}`)
                setName("")
                setEmail("")
                setPassword("")
            })
        
    }


    return(
        <div className="container">
        <div>
            <h1>Sign Up</h1>
        </div>
            <form className="form">
                <input 
                    type="text" 
                    label="name" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="input"
                />
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
export default SignUp