import {Trans} from "@lingui/macro";
import React from 'react';
import choose_from_beneficiary_list from './choose_from_beneficiary_list.jpg';
import enter_beneficiary_account_number from './enter_beneficiary_account_number.jpg';

const AFB_ACCOUNT_ITEMS = [
    {
        title:<Trans>Choose From Beneficiary List</Trans>,
        image:[choose_from_beneficiary_list],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans>Enter Beneficiary Account</Trans>,
        image:[enter_beneficiary_account_number],
        description:<Trans>fyjk;glifktfy</Trans>
    }
];

export default AFB_ACCOUNT_ITEMS;