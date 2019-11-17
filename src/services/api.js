const baseUrl = "http://localhost:3001"

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

export const fetchMessages = () => {
    return fetch(baseUrl + '/:id/messages')
        .then(resp => resp.json())
}

export const postMessage = (text, recipId) => {
    return fetch(baseUrl + '/:id/message', {
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

export const fetchFriends = (id) => {
    return fetch(baseUrl + '/friends', {
        headers: { auth: localStorage.token }
    }).then(resp => resp.json())
}
export const addFriend = (userId, friendId) => {
    return fetch(baseUrl + `/${userId}/friend`, {
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

