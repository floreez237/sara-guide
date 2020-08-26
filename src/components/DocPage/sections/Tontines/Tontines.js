import React from 'react';
import {Trans} from '@lingui/macro';
import TontineHome from './tontines_home.jpg';
import RobTontine from './rob_tontines.jpg';
const TONTINE_ITEMS=[
    {
        title: <Trans>Tontine Dashboard</Trans>,
        image: TontineHome,
        description: "ddd",
    },
    {
        title: <Trans>Robes Tontines</Trans>,
        image: RobTontine,
        description: "",
    }
];

export default TONTINE_ITEMS;
