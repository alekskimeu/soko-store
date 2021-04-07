import React from 'react'
import Service from './Service/Service'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StarsIcon from '@material-ui/icons/Stars';
import LoopIcon from '@material-ui/icons/Loop';

import './Services.css'

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <Service icon={<LocalShippingIcon />} title="Fast Delivery" />
                <Service icon={<StarsIcon />} title="Buyer Protection" />            
                <Service icon={<LoopIcon />} title="Customer Support" /> 
            </div>
                       
        </div>
    )
}

export default Services
