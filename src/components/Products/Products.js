import React from 'react'
import Product from './Product/Product'
import './Products.css'

const products = [
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back1.jpg"),
        price: "UGX 185,000"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back2.jpg"),
        price: "UGX 118,400",
        discount: "20%"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back3.jpg"),
        price: "UGX 4,000"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back3.jpg"),
        price: "UGX 34,000"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back1.jpg"),
        price: "UGX 8,000"
    }
]

const Products = () => {
    return (
        <div className="products">
            <h3 className="products__header">Electronics<span>12</span></h3>
            <div className="products__list">
                {
                    products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products
