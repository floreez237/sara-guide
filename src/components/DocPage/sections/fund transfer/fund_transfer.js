import React from 'react';
import fund_transfer from './fund_transfer.jpg';
import flash_transfer from './flash_transfer.jpg';
import to_an_afb_bank_account from './to_an_afb_bank_account.jpg';
import to_other_wallet from './to_other_wallet.jpg'
import home from '../home.jpg';
import {Trans} from '@lingui/macro';

const FUND_TRANSFER_ITEMS = [
    {
        title:<Trans>Fund Transfer</Trans>,
        image:[home,fund_transfer],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans> To Other Wallet</Trans>,
        image:[to_other_wallet],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans> To An AFB Bank Account</Trans>,
        image:[to_an_afb_bank_account],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans> Flash Transfer</Trans>,
        image:[flash_transfer],
        description:<Trans>fyjk;glifktfy</Trans>
    },
    {
        title:<Trans> Via QR CODE</Trans>,
        image:[null],
        description:<Trans>fyjk;glifktfy</Trans>
    }

];

export default FUND_TRANSFER_ITEMS;