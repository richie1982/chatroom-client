import React, { useContext, useState, useEffect } from 'react'
import '../css/FriendList.css'
import { CTX } from '../Store'
import { findFriend } from '../services/api'

const FriendList = () => {

    const [ state ] = useContext(CTX)
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ results, setResults ] = useState()

    const handleSearchFetch = () => {
        findFriend(searchTerm)
            .then(data => {
                if (data.error) return data.error
                setResults(data)
                console.log(data)
            })
    }

    const timer = () => setTimeout(() => {
                handleSearchFetch()
                setLoading(false)
            }, 1000)

    const handleSearch = (value) => {
        setLoading(true)
        setSearchTerm(value)
    }

    useEffect(() => {
        searchTerm.length > 0 &&
            timer()
            return () => {clearTimeout(timer)}
    }, [searchTerm])

    return(
        <div className="friend-list-container">
        <div>
            <form>
                <input
                    type="text"
                    label="searchTerm"
                    value={searchTerm}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Search for Contacts"
                />
            </form>
        </div>
        {
            <div>
                {state
                ? state.friends.map((friend, ind) => <li key={ind}>{friend.name}</li>)
                : <h3>No friends</h3>
                }
            </div>

        }
        </div>

    )
}

export default FriendList