import io from 'socket.io-client'

let socket

if (!socket) {
    socket = io(':3030')
    socket.on('chat-message', msg => {
        console.log({msg})
    })

}
socket.close()

export const sendChat = (user, msg) => {
    const obj = {
        user: user,
        msg: msg
    }
    socket.emit('chat-message', obj)
  }
  