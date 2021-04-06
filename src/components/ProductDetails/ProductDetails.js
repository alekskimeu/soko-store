import React from 'react'
import { IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RelatedProduct from './RelatedProduct/RelatedProduct'
import proImg from '../../assets/images/back1.jpg'
import './ProductDetails.css'

const products = [
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back1.jpg"),
        price: "UGX 185,000",
        description: "Sold as a piece,"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back2.jpg"),
        price: "UGX 118,400",
        discount: "20%",
        description: "Sold as a piece,"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back3.jpg"),
        price: "UGX 4,000",
        description: "Sold as a piece,"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back3.jpg"),
        price: "UGX 34,000",
        description: "Sold as a piece,"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back1.jpg"),
        price: "UGX 8,000",
        description: "Sold as a piece,"
    },
    {
        title: "Kids 2pk Cloth Face Masks",
        image: require("../../assets/images/back3.jpg"),
        price: "UGX 34,000",
        description: "Sold as a piece,"
    },
]

const ProductDetails = () => {
    return (
        <>
        <div className="details">
            <div className="details__img">
                <img src={proImg} alt="Product title" />
                <ul className="selectors">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="details__info">
                <div className="details__header">
                    <h4>Norbury Scandinavian Wood Leg Ottoman</h4>
                    <p>
                            Sold as a piece, Wooden upholstered ottoman lends a laid-back appeal to your
                            indoor space. Comes with soft padding for extra comfort and support. Solid wooden
                            and metal frame ensures durable, long-lasting use. Great as a footrest or extra seat
                            when entertaining guests.
                    </p>
                </div>

                <div className="details__price">
                    <p className="details__price">UGX 118,400 <span>-20%</span></p>
                    <p className="details__discount">UGX 148,000</p>
                </div>
                <div className="details_quantity">
                    <span className="to-cart"> <span className="minus">-</span> <span className="quantity">1</span> <span className="add">+</span> </span>
                </div>
                <div className="details__cta">
                    <button className="cta__bag">
                        Add to Bag
                    </button>
                    <button className="cta__buy">
                        Buy Now
                    </button>
                </div>
            </div>
            </div>

            <div>
                <div className="related__header">
                    <h4>Related Products</h4>
                    <div className="related__nav">
                        <IconButton className="nav-icon">
                            <ArrowBackIosIcon className="inactive" />                            
                        </IconButton>
                        <IconButton className="nav-icon">
                            <ArrowForwardIosIcon className="active" />
                        </IconButton>
                    </div>
                </div>
                <div className="related__products">
                    {
                        products.map((product, index) => (
                            <RelatedProduct key={index} product={product} />                        
                        ))
                    }
                </div>
            </div>
            </>
    )
}

export default ProductDetails
