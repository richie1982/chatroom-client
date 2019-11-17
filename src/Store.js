import React, { createContext, useReducer } from 'react'

export const CTX = createContext()

const userReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return state = action.payload
        case "REMOVE_USER":
            return state = null
        case "IMPORT_FRIENDS":
            return {...state, friends: 
                [...action.payload] 
            }
        case "ADD_FRIEND":
            return {...state, friends: 
                [...state.friends, action.payload] 
            }
        case "REMOVE_FRIEND":
            return {...state, friends:
                state.friends.filter(friend => friend._id !== action.payload_id)
            }
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

