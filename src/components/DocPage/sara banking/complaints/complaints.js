import React from 'react';
import {Trans} from '@lingui/macro';
import complaints from './Complaints.jpg';
import home from './../home.jpg';

const COMPLAINTS =[
    {
        title:<Trans>Complaints</Trans>,
        image:[home, complaints],
        description:<Trans id="complaints.description">The Complaints tab presents a form to send a complaint.</Trans>
    }
]

export default COMPLAINTS;