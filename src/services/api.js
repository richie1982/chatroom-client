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

export const fetchMessages = (userId) => {
    return fetch(baseUrl + `/${userId}/messages`)
        .then(resp => resp.json())
}

export const postMessage = (text, userId, recipId) => {
    return fetch(baseUrl + `/${userId}/message`, {
        method: "POST",
        headers: {
            auth: localStorage.token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            recipId,
        })
    }).then(resp => resp.json())
}

// FRIENDS

export const fetchFriends = (id) => {
    return fetch(baseUrl + '/friends', {
        headers: { auth: localStorage.token }
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
            friendId: friendId
        })
    }).then(resp => resp.json())
}

export const removeFriend = (userId, friendId) => {
    return fetch(baseUrl + `/${userId}/friend`, {
        method: "DELETE",
        headers: { auth: localStorage.token },
        body: JSON.stringify({
            friendId: friendId
        })
    }).then(resp => resp.json())
}

// FRIEND SEARCH

export const findFriend = (query) => {
    return fetch(baseUrl + `/search/${query}`)
        .then(resp => resp.json())
}

