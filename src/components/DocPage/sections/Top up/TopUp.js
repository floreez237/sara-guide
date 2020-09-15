import {Trans} from "@lingui/macro";
import home from './../home.jpg'
import topUpHome from './topup_Home.jpg'
import React from "react";

const TOP_UP_ITEMS=[
    {
        title:<Trans>Top Up</Trans>,
        image:[home,topUpHome],
        description:<Trans id="topUp.description">The TopUp module allows you to purchase Airtime and Data.</Trans>
    }
]

export default TOP_UP_ITEMS