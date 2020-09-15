import airTimeToMe from './airtime_to_me.jpg'
import airTimeToSomeone from './air_time_to_someone.jpg'
import {Trans} from "@lingui/macro";
import React from "react";
import airtime from './airtime.jpg'
import topUp from './../topup_Home.jpg'

const AIRTIME_ITEMS=[
    {
        title:<Trans>Airtime </Trans>,
        image:[topUp,airtime],
        description:<Trans> </Trans>
    },
    {
        title:<Trans>Airtime to me </Trans>,
        image:[airTimeToMe],
        description:<Trans> </Trans>
    },
    {
        title: <Trans>Airtime to someone</Trans>,
        image:[airTimeToSomeone],
        description: <Trans> </Trans>
    }
]

export default AIRTIME_ITEMS