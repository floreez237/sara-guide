import React from 'react';
import services from './services.jpg';
import product_and_services from './products_and_services.jpg';
import home from '../home.jpg';
import {Trans} from '@lingui/macro';

const PRODUCT_AND_SERVICE_ITEMS = [
    {
        title:<Trans>Products and Services</Trans>,
        image:[home,product_and_services],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans>Services</Trans>,
        image:[services],
        description:<Trans>fyjk;glifktfy</Trans>
    }
];

export default PRODUCT_AND_SERVICE_ITEMS;