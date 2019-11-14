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
    .then(data => console.log(data))
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
    .then(data => console.log(data))
}

export const fetchMessages = () => {
    return fetch(baseUrl + '/:id/messages')
        .then(resp => resp.json())
}

export const postMessage = (text, recipId) => {
    return fetch(baseUrl + '/:id/message', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            recipId,
        })
    }).then(resp => resp.json())
}

