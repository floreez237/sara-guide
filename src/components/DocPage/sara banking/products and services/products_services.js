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
        description: <Trans id="products.description">The product menu allows you to make a checkbook request, to make a credit card subscription and to make a request to open a bank account.</Trans>
    },
    {
        title:<Trans>Services</Trans>,
        image: [services],
        description: <Trans id="service.description">The service menu offers the possibility to view the exchange rate</Trans>
    }
]

export default PRODUCT_SERVICES;