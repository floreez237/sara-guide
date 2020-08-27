import {Trans} from "@lingui/macro";
import React from 'react';
import new_payment from './tontine_payment.jpg';
import contribute from './contribute.jpg';
import tontine_history from './tontine_history.jpg';
import approval from './approvals.jpg';
import payment_history from './payment_history.jpg';

const ROB_TONTINE_ITEMS=[
    {
        title: <Trans>New Tontine Payment</Trans>,
        image: [new_payment],
        description: "",
    },
    {
        title: <Trans>Contribute to Tontine</Trans>,
        image: [contribute],
        description: "",
    },
    {
        title: <Trans>Tontine History</Trans>,
        image: [tontine_history],
        description: "",
    },
    {
        title: <Trans>Pending Approvals</Trans>,
        image: [approval],
        description: "",
    },
    {
        title: <Trans>Payment History</Trans>,
        image: [payment_history],
        description: "",
    },



];

export default ROB_TONTINE_ITEMS