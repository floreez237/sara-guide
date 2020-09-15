import React from 'react'
import {Trans} from '@lingui/macro'
import CashVouchers from "./Cash Vouchers.jpg"
import home from './../home.jpg';

const CASH_VOUCHERS = [
    {
        title: <Trans>Cash Vouchers</Trans>,
        image: [home, CashVouchers],
        description: <Trans>Cash Vouchers</Trans>,
    },
]

export default CASH_VOUCHERS;