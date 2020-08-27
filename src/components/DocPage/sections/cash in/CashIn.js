import home from './../home.jpg'
import cashInFromAfbBank from './cash_in_from_bank.jpg'
import cashIn from './cash_in.jpg'
import {Trans} from "@lingui/macro";
import React from "react";

const CASH_IN_ITEMS=[
    {
        title:<Trans>Cash In</Trans>,
        image:[home,cashIn],
        description:<Trans> </Trans>
    },
    {
        title: <Trans>To AFB Bank</Trans>,
        image:[cashInFromAfbBank],
        description: <Trans> </Trans>
    }
]

export default CASH_IN_ITEMS