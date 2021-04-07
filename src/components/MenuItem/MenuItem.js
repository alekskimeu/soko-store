import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

const MenuItem = ({ icon, title }) => {
    return (
        <div className="menu">
            <Link>
                {icon} {title}
            </Link>
        </div>
    )
}

export default MenuItem
