import confirm from './confirm.jpg';
import React from 'react';
import findBill from './find_Bill.jpg';
import partners from './partners.jpg';
import paybill from './paybill.jpg';
import paymentCanal from './payment_canal.jpg';
import searchingBill from './searching_bill.jpg';
import ServicePaymentHome from './service_payment_home.jpg';
import home from './../home.jpg';
import {Trans} from '@lingui/macro';

const SERVICE_PAYMENTS_ITEMS=[

    {
        title: <Trans>Service Payment</Trans>,
        image: [home, ServicePaymentHome],
        description: <Trans></Trans>
    },
    {
        title: <Trans>Confirm Payment</Trans>,
        image:[confirm],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Find Bill</Trans>,
        image:[findBill],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Partners</Trans>,
        image:[partners],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Pay Bill</Trans>,
        image:[paybill],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Pay Canal Bill</Trans>,
        image:[paymentCanal],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Searching Bill</Trans>,
        image:[searchingBill],
        description:<Trans></Trans>
    },
    {
        title: <Trans>Partner Types</Trans>,
        image:[partners],
        description:<Trans></Trans>
    },




]