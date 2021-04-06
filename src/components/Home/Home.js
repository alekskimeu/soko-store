import React from 'react'
import { Search, Categories, Products, Bag } from '../index'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Search />
            <Categories />
            <Products />
            <Bag />
        </div>
    )
}

export default Home
