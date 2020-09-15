import React from 'react';
import {Trans} from '@lingui/macro';
import accountList from './My Accounts.jpg';
import home from '../../home.jpg';

const MY_ACCOUNTS =[
    {
        title:<Trans>Accounts List</Trans>,
        image:[home, accountList],
        description:<Trans id="accountList.description">The account module allows you to view the list of your accounts</Trans>
    }
]

export default MY_ACCOUNTS;
