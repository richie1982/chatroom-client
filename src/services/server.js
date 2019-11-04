import io from 'socket.io-client'

let socket

if (!socket) {
    socket = io(':3001')
    socket.on('chat-message', msg => {
        console.log({msg})
    })
}

export const sendChat = (user, msg) => {
    const obj = {
        user: user,
        msg: msg
    }
    socket.emit('chat-message', obj)
  }
  