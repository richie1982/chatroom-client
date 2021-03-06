const baseUrl = "http://localhost:3001"

// SIGNUP, LOGIN, VALIDATION

export const signUp = (name, email, password) => {
    return fetch(baseUrl + '/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    }).then(resp => resp.json())
}

export const logIn = (email, password) => {
    return fetch(baseUrl + '/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(resp => resp.json())
}

export const validateUser = () => {
    return fetch(baseUrl + '/validate', {
        headers: { auth: localStorage.token }
    }).then(resp => resp.json())
}

// MESSAGES

export const fetchMessages = (userId, friendId) => {
    return fetch(baseUrl + `/${userId}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            auth: localStorage.token
        },
        body: JSON.stringify({
            friendId
        })
    }).then(resp => resp.json())
}

export const addMessage = (userId, msgId, text) => {
    return fetch(baseUrl + `/${userId}/messages`, {
        method: "PATCH",
        headers : { 
            "Content-Type": 'application/json',
            auth: localStorage.token
    },
        body: JSON.stringify({
            msgId,
            text
            })
    }).then(resp => resp.json())
}

// FRIENDS

export const fetchFriends = () => {
    return fetch(baseUrl + '/friends', {
        headers: { auth: localStorage.token }
    }).then(resp => resp.json())
}

export const sendInvite = (friendId) => {
    return fetch(baseUrl + '/invite', {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
            auth: localStorage.token
        },
        body: JSON.stringify({
            friendId
        })
    }).then(resp => resp.json())
}

export const declineInvite = (id) => {
    return fetch(baseUrl + '/pending', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            auth: localStorage.token
        },
        body: JSON.stringify({
            friendId: id
        })
    }).then(resp => resp.json())
}

export const addFriend = (friendId) => {
    return fetch(baseUrl + `/friend`, {
        method: "PATCH",
        headers: { 
            auth: localStorage.token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            friendId
        })
    }).then(resp => resp.json())
}

export const removeFriend = (userId, friendId) => {
    return fetch(baseUrl + `/${userId}/friend`, {
        method: "DELETE",
        headers: { auth: localStorage.token },
        body: JSON.stringify({
            friendId
        })
    }).then(resp => resp.json())
}

// FRIEND SEARCH

export const findFriend = (query) => {
    return fetch(baseUrl + `/search/${query}`)
        .then(resp => resp.json())
}

