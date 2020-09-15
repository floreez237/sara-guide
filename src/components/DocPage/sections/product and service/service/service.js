import React from 'react';
import service from './service.jpg';
import {Trans} from '@lingui/macro';

const SERVICE_ITEMS = [
    {
        title:<Trans>Service</Trans>,
        image:[service],
        description:<Trans id="service.exchangeRates"> The service menu has a feature that allows you to view the exchange rate.</Trans>
    },
];

export default SERVICE_ITEMS;