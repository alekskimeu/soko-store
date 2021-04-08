import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

import MenuItem from '../MenuItem/MenuItem'

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__left">
                <Link to="/"> 
                <IconButton className="logo">
                   <HomeIcon />
                    </IconButton>
                </Link>
                <div className="header__leftInfo">
                    <h5>Target</h5>
                    <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                </div>
            </div>
                <div className="header__right">
                    <MenuItem icon={<LocalMallIcon/>} title="Bag" className="nav-active" />
                    <MenuItem icon={<ShoppingCartIcon/>} title="Orders" />
                </div>
            </div>
        </div>
    )
}

export default Header
