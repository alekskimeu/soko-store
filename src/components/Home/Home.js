import React from 'react'
import { Search, Categories, Products, Bag, Services, Footer } from '../index'
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="home">
            <div className="container">
                <Search />
                <Categories />
                <Products />
                <Bag />
            </div>            
        </div>
            <div className="home__bottom">
                <Services />
                <Footer />
            </div>
            
        </>
    )
}

export default Home
