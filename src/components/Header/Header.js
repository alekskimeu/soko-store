import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <div className="header__left">
                <IconButton className="logo">
                    <HomeIcon />
                </IconButton>
                <div className="header__leftInfo">
                    <h5>Target</h5>
                    <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                </div>
            </div>
            <div className="header__right">
                <div>
                    <Link to="/my-bag" className="nav-active">
                        <LocalMallIcon />
                        Bag
                    </Link>
                </div>
                    <div>
                        <Link>
                            <ShoppingCartIcon />
                            Orders
                        </Link>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
