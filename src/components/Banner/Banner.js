import React from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <p>Store made with S<span><LocalMallIcon /></span>KO</p>
            </div>
        </div>
    )
}

export default Banner
