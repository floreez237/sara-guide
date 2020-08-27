import airTimeToMe from './airtime_to_me.jpg'
import airTimeToSomeone from './air_time_to_someone.jpg'
import {Trans} from "@lingui/macro";
import React from "react";

const AIRTIME_ITEMS=[
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