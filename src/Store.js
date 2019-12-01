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
        case "IMPORT_MESSAGES":
            return {...state, messages: action.payload }
        case "ADD_MESSAGE":
            return { ...state, messages: 
                [ action.payload, ...state.messages ]
            }
        case "SELECT_RECIPIENT": 
            return {...state, selected: action.payload}
        case "SET_MSGID":
            return {...state, msgId: action.payload}
        case "CLEAR_CONV":
            return {...state, msgId: ""}
        case "REMOVE_INVITE":
            return {...state, invites:
                state.invites.filter(el => el._id !== action.payload._id)
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

