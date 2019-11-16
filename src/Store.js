import React, { createContext, useReducer } from 'react'

export const CTX = createContext()

// const initialState = {
//     name: "Rich",
//     email: "rich@dow.com",
//     _id: "12345678"
// }

const userReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return state = action.payload
        case "REMOVE_USER":
            return state = null
        default:
            throw new Error("reducer error")
    }
}

export const Store = (props) => {

    const stateHook = useReducer(userReducer)

    return(
        <CTX.Provider value={stateHook}>
            {props.children}
        </CTX.Provider>
    )
}

