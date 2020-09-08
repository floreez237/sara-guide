import React from 'react'
import {Trans} from '@lingui/macro'
import fundTransferImage from "./Fund Transfer.jpg"
import AccountToAccountImage from "./Account To Account.jpg"
import FundTransferBetweenBanks from "./Fund Transfer between banks.jpg"
import ListOfBeneficiaries from "./List Of Beneficiaries.jpg"
import ListRecurringTransfer from "./List recurring transfers.jpg"

const FUND_TRANSFER = [
    {
        title: <Trans>Fund Transfer</Trans>,
        description: <Trans>Fund Transfer</Trans>,
        image:[fundTransferImage]
    },
    {
        title: <Trans>Manage Beneficiaries</Trans>,
        description: <Trans>Manage Beneficiaries</Trans>,
        image:[ListOfBeneficiaries]
    },
    {
        title: <Trans>Account to Account</Trans>,
        description: <Trans>Account to Account</Trans>,
        image:[AccountToAccountImage]
    },
    {
        title: <Trans>To AFB accounts</Trans>,
        description: <Trans>To AFB accounts</Trans>,
        image:[FundTransferBetweenBanks]
    },
    {
        title: <Trans>To other bank's account</Trans>,
        description: <Trans>To other bank's account</Trans>,
        image:[FundTransferBetweenBanks]
    },
    {
        title: <Trans>Manage recurring transactions</Trans>,
        description: <Trans>Manage recurring transactions</Trans>,
        image:[ListRecurringTransfer]
    }
]

export default FUND_TRANSFER