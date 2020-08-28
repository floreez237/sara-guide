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
        this.goToToChooseFromBeneficiary = this.goToToChooseFromBeneficiary.bind(this)
        this.goToEnterBeneficiaryAccount = this.goToEnterBeneficiaryAccount.bind(this)
        this.goToServicePayment = this.goToServicePayment.bind(this)
        this.goToPartnerTypes = this.goToPartnerTypes.bind(this)
        this.goToPartners = this.goToPartners.bind(this)
        this.goToPaymentProcedure = this.goToPaymentProcedure.bind(this)
        this.goToAirTime = this.goToAirTime.bind(this)
        this.goToExchangeRate = this.goToExchangeRate.bind(this)
        this.goToData = this.goToData.bind(this)
        this.goToMyDataNumber = this.goToMyDataNumber.bind(this)
        this.goToOtherDataNumber = this.goToOtherDataNumber.bind(this)
    }
//Account
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

// Cash in
    goToCashIn(){
        this.props.changeSection("CashIn")
    }
    goToCashInFromBank(){
        this.props.changeSection("CashInFromBank")
    }
//Cash out
    goToCashOut(){
        this.props.changeSection("CashOut")
    }
    goToCashOutToBank(){
        this.props.changeSection("CashOutToBank")
    }

//Fund Transfer
    goToFundTransfer(){
        this.props.changeSection("FundTransfer")
    }
    goToToOtherWallet(){
        this.props.changeSection("ToOtherWallet")
    }

                //To an AFB Bank
                    goToToAnAFBBank(){
                        this.props.changeSection("ToAnAFBBank")
                    }
                    goToToChooseFromBeneficiary(){
                        this.props.changeSection("ChooseFromBeneficiary")
                    }
                    goToEnterBeneficiaryAccount(){
                        this.props.changeSection("EnterBeneficiaryAccount")
                    }
    goToFlashTransfer(){
        this.props.changeSection("FlashTransfer")
    }
    goToViaQRCode(){
        this.props.changeSection("ViaQRCode")
    }

    //Service Payment
    goToServicePayment(){
        this.props.changeSection("ServicePayment")
    }
    goToPartnerTypes(){
        this.props.changeSection("PartnerTypes")
    }
    goToPartners(){
        this.props.changeSection("Partners")
    }
    goToPaymentProcedure(){
        this.props.changeSection("PaymentProcedure")
    }

    //Product and Services
    goToProductNService(){
        this.props.changeSection("ProductNService")
    }
    goToProduct(){
        // this.props.changeSection("Product")
        this.displayIsComingSoon()
    }
    goToService(){
        this.props.changeSection("Service")
    }
    goToExchangeRate(){
        this.props.changeSection("ExchangeRate")
    }
    goToTopUp(){
        this.props.changeSection("TopUp")
    }
    goToService(){
        this.props.changeSection("Service")
    }

    goToAirTime(){
        this.props.changeSection("AirTime")
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
    goToData(){
        this.displayIsComingSoon()
    }
    goToMyDataNumber(){
        this.displayIsComingSoon()
    }
    goToOtherDataNumber(){
        this.displayIsComingSoon()
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
    displayIsComingSoon(){
        alert("Coming Soon")
    }
    // goToTopUp(){
    //     this.
    // }

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
                                            <Card.Body onClick = {this.goToToChooseFromBeneficiary}>
                                                i. <Trans>Choose from beneficiary list</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="20">
                                            <Card.Body onClick = {this.goToEnterBeneficiaryAccount}>
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
                        <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {this.goToServicePayment}>
                            5. <Trans>Service Payment</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={"4"}>
                            <Card.Body>
                                <Accordion>
                                    
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {this.goToPartnerTypes}>
                                            a. <Trans>Partners</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                            <Accordion>
                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {this.goToPartners}>
                                                    i. <Trans>Payment Canal</Trans>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey = "4">
                                                    <Card.Body onClick = {this.goToPaymentProcedure}>
                                                      <Trans>Payment Procedure</Trans>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                </Card>
                                                </Accordion>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>

                        </Accordion.Collapse>
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
                                    {/* Put event key 21 in following for the children components to be visible */}
                                        <Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                i. <Trans>Subscribtion for bank card</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="20">
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
                                            <Card.Body onClick = {this.goToExchangeRate}>
                                                i. <Trans>Exchange rates</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="22" onClick = {this.goToTopUp}>
                            7. Top Up
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="22">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22" onClick = {this.goToAirTime} >
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
                                        <Accordion.Toggle as={Card.Header} eventKey="22" onClick = {this.goToData}>
                                            b. <Trans>Data</Trans>
                                    </Accordion.Toggle>
                                    {/* Put event key 22 in following for the children components to be visible */}
                                        <Accordion.Collapse eventKey="21" onClick = {this.goToMyDataNumber}>
                                            <Card.Body>
                                                i. <Trans>My number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="21" onClick = {this.goToOtherDataNumber}>
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