import React, { useContext, useState, useEffect } from 'react'
import '../css/FriendList.css'
import { CTX } from '../Store'
import { findFriend } from '../services/api'
import Contact from './Contact'
import Friend from './Friend'

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
            })
    }

    const timer = () => setTimeout(() => {
                handleSearchFetch()
                setLoading(false)
            }, 500)

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        searchTerm.length > 0 &&
            timer()
            return () => {clearTimeout(timer)}
    }, [searchTerm])

    useEffect(() =>{
        results && searchTerm.length < 1 &&
            setResults(null)
    }, [results, searchTerm])

    return(
        <div className="friend-list-container">
        <div>
            <div className="search-container">
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        className="search-input"
                        type="text"
                        label="searchTerm"
                        value={searchTerm}
                        onChange={e => handleSearch(e)}
                        placeholder="Search for Contacts"
                    />
                </form>
            </div>
        </div>
        { loading && searchTerm.length > 0
        ? <div>Loading...</div>
        : results && searchTerm.length > 0
            ?<div style={{overflow: "scroll"}}>
                {results.length > 0 
                ?results.map((result, ind) => <Contact key={ind} user={result} setResults={setResults}/>)
                :<h3>No contacts found...</h3>
                }
            </div>
            :<div style={{overflow: "scroll"}}>
                {!!state && !!state.friends
                ? state.friends.map((friend, ind) => <Friend key={ind} user={friend}/>)
                : <h3>No friends</h3>
                }
            </div>

        }
        </div>

    )
}

export default FriendList