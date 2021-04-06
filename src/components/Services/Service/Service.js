import React from 'react'
import './Service.css'

const Service = ({ title, icon }) => {
    return (
        <div className="service">
            {icon }
            <p>{title}</p>
        </div>
    )
}

export default Service
