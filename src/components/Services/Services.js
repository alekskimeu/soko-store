import React from 'react'
import Service from './Service/Service'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StarsIcon from '@material-ui/icons/Stars';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import './Services.css'

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <Service icon={<LocalShippingIcon />} title="Fast Delivery" />
                <Service icon={<StarsIcon />} title="Buyer Protection" />            
                <Service icon={<HourglassEmptyIcon />} title="Customer Support" /> 
            </div>
                       
        </div>
    )
}

export default Services
