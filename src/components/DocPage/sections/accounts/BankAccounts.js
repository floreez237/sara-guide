import React from 'react'
import {Trans} from '@lingui/macro'
import bank_account_image from "./bank-accounts.png"

const BANK_ACCOUNTS = 
[
    {
        title : <Trans>Bank Accounts</Trans>,
        image : [bank_account_image],
        description: <Trans id="bankAccounts">Bank Accounts allows you to view the list of your bank accounts and the list of your beneficiaries.</Trans>
    }
]

export default BANK_ACCOUNTS