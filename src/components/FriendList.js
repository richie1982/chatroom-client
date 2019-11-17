import React, { useContext, useState } from 'react'
import '../css/FriendList.css'
import { CTX } from '../Store'

const FriendList = () => {

    const [ state ] = useContext(CTX)
    const [ searchTerm, setSearchTerm ] = useState("")

    return(
        <div className="friend-list-container">
        <div>
            <form>
                <input
                    type="text"
                    label="searchTerm"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search for Contacts"
                />
            </form>
        </div>
        <div>
            {state
            ? state.friends.map((friend, ind) => <li key={ind}>{friend.name}</li>)
            : <h3>No friends</h3>
            }
        </div>
        </div>

    )
}

export default FriendList