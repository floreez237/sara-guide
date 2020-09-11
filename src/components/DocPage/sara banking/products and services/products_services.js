import React from "react";
import {Trans} from '@lingui/macro'
import productServices from './products and services.jpg';
import home from './../home.jpg'
import products from "./Products.jpg";
import services from "./Services.jpg";
const PRODUCT_SERVICES = [
    {
        title: <Trans>Products and Services</Trans>,
        image: [home, productServices],
        description: <Trans></Trans>
    },
    {
        title: <Trans>Products</Trans>,
        image: [products],
        description: <Trans></Trans>
    },
    {
        title:<Trans>Services</Trans>,
        image: [services],
        description: <Trans></Trans>
    }
]

export default PRODUCT_SERVICES;