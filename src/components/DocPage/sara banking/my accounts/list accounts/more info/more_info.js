import React from "react";
import {Trans} from '@lingui/macro';
import more_info from './Account Details.jpg';
import transHistory from './Transaction History.jpg';
import transHistoryTen from './Transaction History Last 10.jpg';
const MORE_INFO = [
    {
        title: <Trans>Account Details</Trans>,
        image: [more_info],
        description: <Trans id="more_info.description">Used to view transactions history</Trans>
    },
    {
        title: <Trans>Transaction History</Trans>,
        image: [transHistory],
        description: <Trans></Trans>
    },
    {
        title: <Trans>Last Ten Transactions</Trans>,
        image: [transHistoryTen],
        description: <Trans></Trans>
    },
]

export default MORE_INFO;