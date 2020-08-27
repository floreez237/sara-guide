 import {Trans} from "@lingui/macro";
import cashOut from './cash_out.jpg'
import cashOutToAfb from './cash_out_to_afb.jpg'
import home from './../home.jpg'
import React from "react";

 const CASH_OUT_ITEMS=[
    {
        title:<Trans>Cash Out</Trans>,
        image:[home,cashOut],
        description:<Trans> </Trans>
    },
    {
        title: <Trans> To an AFB Bank Account</Trans>,
        image:[cashOutToAfb],
        description: <Trans> </Trans>
    }
]

export default CASH_OUT_ITEMS;