import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './style.scss'
import {Trans} from '@lingui/macro';
import FUND_TRANSFER_ITEMS from '../DocPage/sections/fund transfer/fund_transfer';

class CustomAccordion extends React.Component {

    constructor(props){
        super(props)
        this.goToAccountManagement = this.goToAccountManagement.bind(this)
        this.goToBankAccount = this.goToBankAccount.bind(this)
        this.goToMyBankAccount = this.goToMyBankAccount.bind(this)
        this.goToBeneficiaryAccounts = this.goToBeneficiaryAccounts.bind(this)
        this.goToAccounts = this.goToAccounts.bind(this)
        this.goToCashIn = this.goToCashIn.bind(this)
        this.goToCashInFromBank = this.goToCashInFromBank.bind(this)
        this.goToCashOut = this.goToCashOut.bind(this)
        this.goToCashOutToBank = this.goToCashOutToBank.bind(this)
        this.goToFundTransfer = this.goToFundTransfer.bind(this)
        this.goToToOtherWallet = this.goToToOtherWallet.bind(this)
        this.goToToAnAFBBank = this.goToToAnAFBBank.bind(this)
        this.goToFlashTransfer = this.goToFlashTransfer.bind(this)
        this.goToViaQRCode = this.goToViaQRCode.bind(this)
        this.goToProductNService = this.goToProductNService.bind(this)
        this.goToProduct = this.goToProduct.bind(this)
        this.goToService = this.goToService.bind(this)
        this.goToTopUp = this.goToTopUp.bind(this)
        this.goToAirTimeMyNumber = this.goToAirTimeMyNumber.bind(this)
        this.goToAirTimeOtherNumber = this.goToAirTimeOtherNumber.bind(this)
        this.goToTontine = this.goToTontine.bind(this)
        this.goToRobsTontine = this.goToRobsTontine.bind(this)
        this.goToNewPayment = this.goToNewPayment.bind(this)
        this.goToContribute = this.goToContribute.bind(this)
        this.goToTontineHistory = this.goToTontineHistory.bind(this)
        this.goToPendingApproval = this.goToPendingApproval.bind(this)
        this.goToPendingHistory = this.goToPendingHistory.bind(this)
    }
//goToTopUp
    goToAccountManagement(){
        this.props.changeSection("AccountManagement")
    }
    goToBankAccount(){
        this.props.changeSection("BankAccount")
    }
    goToMyBankAccount(){
        this.props.changeSection("MyBankAccount")
    }
    goToBeneficiaryAccounts(){
        this.props.changeSection("BeneficiaryAccounts")
    }
    goToAccounts(){
        this.props.changeSection("Accounts")
    }
    goToCashIn(){
        this.props.changeSection("CashIn")
    }
    goToCashInFromBank(){
        this.props.changeSection("CashInFromBank")
    }
    goToCashOut(){
        this.props.changeSection("CashOut")
    }
    goToCashOutToBank(){
        this.props.changeSection("CashOutToBank")
    }
    goToFundTransfer(){
        this.props.changeSection("FundTransfer")
    }
    goToToOtherWallet(){
        this.props.changeSection("ToOtherWallet")
    }
    goToToAnAFBBank(){
        this.props.changeSection("ToAnAFBBank")
    }
    goToFlashTransfer(){
        this.props.changeSection("FlashTransfer")
    }
    goToViaQRCode(){
        this.props.changeSection("ViaQRCode")
    }
    goToProductNService(){
        this.props.changeSection("ProductNService")
    }
    goToProduct(){
        this.props.changeSection("Product")
    }
    goToService(){
        this.props.changeSection("Service")
    }
    goToTopUp(){
        this.props.changeSection("TopUp")
    }
    goToService(){
        this.props.changeSection("Service")
    }
    goToAirTimeMyNumber(){
        this.props.changeSection("AirTimeMyNumber")
    }
    goToAirTimeOtherNumber(){
        this.props.changeSection("AirTimeOtherNumber")
    }
    goToTontine(){
        this.props.changeSection("Tontine")
    }
    goToRobsTontine(){
        this.props.changeSection("RobsTontine")
    }
    goToNewPayment(){
        this.props.changeSection("NewPayment")
    }
    goToContribute(){
        this.props.changeSection("Contribute")
    }
    goToTontineHistory(){
        this.props.changeSection("TontineHistory")
    }
    goToPendingApproval(){
        this.props.changeSection("PendingApproval")
    }
    goToPendingHistory(){
        this.props.changeSection("PendingHistory")
    }

    render() {
        return (
            <div className = 'left-container' >
                <Accordion defaultActiveKey="-1" style = {{
                    cursor: "pointer"
                }}>
                    <Card >
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick = {this.goToAccounts}>
                            1. <Trans>Accounts</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.goToAccountManagement}>
                                            a. Account Management
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1" >
                                            <Card.Body style ={{margin : "0 auto"}}>
                                                i. <Trans>Edit user details</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                ii. Change PIN
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                iii. Add address
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.goToBankAccount}>
                                            b. Bank Account
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1" onClick = {this.goToMyBankAccount}>
                                            <Card.Body>
                                                i. My Bank Account
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1" onClick = {this.goToBeneficiaryAccounts}>
                                            <Card.Body>
                                                ii. Beneficiary Accounts
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.goToCashIn}>
                            2. Cash In
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body onClick = {this.goToCashInFromBank}>
                                a. From an AFB Bank Account
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick= {this.goToCashOut}>
                            3. Cash Out
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body onClick = {this.goToCashOutToBank}>
                                a. To an AFB Bank Account
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="23" onClick = {this.goToFundTransfer}>
                            4. Fund Transfer
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body onClick = {this.goToToOtherWallet}>
                                a. To other wallet
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="20" onClick = {this.goToToAnAFBBank}>
                                            b. To an AFB bank account
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                i. Choose from beneficiary list
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                ii. Enter beneficiary account number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body onClick = {this.goToFlashTransfer}>
                                c. Flash Transfer
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body onClick = {this.goToViaQRCode}>
                                d. Via QR code
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            5. Service Payment
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="21" onClick = {this.goToProductNService}>
                            6. Product and Service
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="21">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="21" onClick = {this.goToProduct}>
                                            a. Product
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                i. Subscribtion for bank card
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                ii. Application for new account
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="21" onClick = {this.goToService}>
                                            b. Service
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                i. Exchange rates
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="22">
                            7. Top Up
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="22">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22" >
                                            a. Airtime
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body onClick = {this.goToAirTimeMyNumber}>
                                                i. My number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body onClick = {this.goToAirTimeOtherNumber}>
                                                ii. Other number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22">
                                            b. Data
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                i. My number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                ii. Other number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7" onClick = {this.goToTontine}>
                            8. Tontine
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="7" onClick = {this.goToRobsTontine}>
                                            a. Robs tontine
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToNewPayment}>
                                                i. New payment
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToContribute}>
                                                ii. Contribute
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToTontineHistory}>
                                                iii. Tontine history
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToPendingApproval}>
                                                iv. Pending approval
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToPendingHistory}>
                                                v. Payment history
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            9. Chat
                        </Accordion.Toggle>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default CustomAccordion