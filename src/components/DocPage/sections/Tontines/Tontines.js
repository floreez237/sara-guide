import {Trans} from '@lingui/macro';
import React from 'react';
import TontineHome from './tontines_home.jpg';
import RobTontine from './rob_tontines.jpg';
import home from './../home.jpg';

const TONTINE_ITEMS=[
    {
        title: <Trans>Tontine</Trans>,
        image: [home, TontineHome],
        description:<Trans></Trans>,
    },
    {
        title: <Trans>"Robes Tontines"</Trans>,
        image: [RobTontine],
        description: <Trans></Trans>,
    }
];

export default TONTINE_ITEMS;
