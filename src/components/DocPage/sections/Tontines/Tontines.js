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
        title: <Trans>Robes Tontines</Trans>,
        image: [TontineHome, RobTontine],
        description: <Trans id="robes.tontines.description">Tontine module allows you to manage your tontines. The image on the left shows the list of its tontines. The one on the right allows you to perform operations on a tontine.</Trans>,
    }
];

export default TONTINE_ITEMS;
