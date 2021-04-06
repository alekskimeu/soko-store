import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search for products..." />
            <SearchIcon />
        </div>
    )
}

export default Search
