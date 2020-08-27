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
        this.goToEditUserDetails = this.goToEditUserDetails.bind(this)
        this.goToChangePIN = this.goToChangePIN.bind(this)
        this.goToAddAddress = this.goToAddAddress.bind(this)
    }
//goToTopUp
    goToAccountManagement(){
        this.props.changeSection("AccountManagement")
    }
    goToEditUserDetails(){
        this.props.changeSection("EditUserDetails")
    }
    goToChangePIN(){
        this.props.changeSection("ChangePIN")
    }
    goToAddAddress(){
        this.props.changeSection("AddAddress")
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
                                            a. <Trans>Account Management</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1" >
                                            <Card.Body style ={{margin : "0 auto"}} onClick = {this.goToEditUserDetails}>
                                                i. <Trans>Edit user details</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body onClick = {this.goToChangePIN}>
                                                ii. <Trans>Change PIN</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1" onClick = {this.goToAddAddress}>
                                            <Card.Body>
                                                iii. <Trans>Add address</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.goToBankAccount}>
                                            b. <Trans>Bank Account</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1" onClick = {this.goToMyBankAccount}>
                                            <Card.Body>
                                                a. <Trans>My Bank Account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1" onClick = {this.goToBeneficiaryAccounts}>
                                            <Card.Body>
                                                b. <Trans>Beneficiary Accounts</Trans>
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
                                a. <Trans>To an AFB Bank Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick= {this.goToCashOut}>
                            3. Cash Out
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body onClick = {this.goToCashOutToBank}>
                                a. <Trans>From an AFB Bank Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="23" onClick = {this.goToFundTransfer}>
                            4. <Trans>Fund Transfer</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body onClick = {this.goToToOtherWallet}>
                                a. <Trans>To other wallet</Trans>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="20" onClick = {this.goToToAnAFBBank}>
                                            b. <Trans>To an AFB bank account</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                i. <Trans>Choose from beneficiary list</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                ii. <Trans>Enter beneficiary account number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body onClick = {this.goToFlashTransfer}>
                                c. <Trans>Flash Transfer</Trans>
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
                            5. <Trans>Service Payment</Trans>
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="21" onClick = {this.goToProductNService}>
                            6. <Trans>Product and Service</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="21">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="21" onClick = {this.goToProduct}>
                                            a. <Trans>Product</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                i. <Trans>Subscribtion for bank card</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                ii. <Trans>Application for new account</Trans>
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
                                                i. <Trans>Exchange rates</Trans>
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
                                            a. <Trans>Airtime</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body onClick = {this.goToAirTimeMyNumber}>
                                                i. <Trans>My number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body onClick = {this.goToAirTimeOtherNumber}>
                                                ii. <Trans>Other number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22">
                                            b. <Trans>Data</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                i. <Trans>My number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                ii. <Trans>Other number</Trans>
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
                                                i. <Trans>New payment</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToContribute}>
                                                ii. <Trans>Contribute</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToTontineHistory}>
                                                iii. <Trans id="Tontine History">Tontine history</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToPendingApproval}>
                                                iv. <Trans id="Pending Approvals">Pending approval</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body onClick = {this.goToPendingHistory}>
                                                v. <Trans id="Payment History">Payment history</Trans>
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