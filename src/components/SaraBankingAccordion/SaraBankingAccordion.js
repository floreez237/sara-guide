import * as React from "react";
import './saraBanking.scss'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Trans} from "@lingui/macro";


export default class saraBankingAccordion extends React.Component {
    constructor(props){
        super(props)
        this.goToMyAccounts = this.goToMyAccounts.bind(this)
        this.goToListOfAccounts = this.goToListOfAccounts.bind(this)
        this.goToMoreInformation = this.goToMoreInformation.bind(this)
        this.goToAccountHistory = this.goToAccountHistory.bind(this)
        this.goToLast10Transactions = this.goToLast10Transactions.bind(this)
        this.goToFundTransfer = this.goToFundTransfer.bind(this)
        this.goToManageBeneficiaries = this.goToManageBeneficiaries.bind(this)
        this.goToAccountToAccount = this.goToAccountToAccount.bind(this)
        this.goToToAFBAccounts = this.goToToAFBAccounts.bind(this)
        this.goToToOtherBankAccounts = this.goToToOtherBankAccounts.bind(this)
        this.goToManageRecurringTransactions = this.goToManageRecurringTransactions.bind(this)
        this.goToListOfBeneficiaries = this.goToListOfBeneficiaries.bind(this)
        this.goToAddABeneficiary = this.goToAddABeneficiary.bind(this)
        this.goToFixedDeposits = this.goToFixedDeposits.bind(this)
        this.goToLoans = this.goToLoans.bind(this)
        this.goToCashVoushers = this.goToCashVoushers.bind(this)
        this.goToCommerce = this.goToCommerce.bind(this)
        this.goToProductAndServices = this.goToProductAndServices.bind(this)
        this.goToProduct = this.goToProduct.bind(this)
        this.goToService = this.goToService.bind(this)
        this.goToCheckBookRequest = this.goToCheckBookRequest.bind(this)
        this.goToRequestToOpenAccount = this.goToRequestToOpenAccount.bind(this)
        this.goToSubscribeToBankAccount = this.goToSubscribeToBankAccount.bind(this)
        this.goToExchangeRates = this.goToExchangeRates.bind(this)
        this.goToBillPayments = this.goToBillPayments.bind(this)
        this.goToChat = this.goToChat.bind(this)
        this.goToComplaints = this.goToComplaints.bind(this)
        this.goToSettings = this.goToSettings.bind(this)
        this.goToAboutAFB = this.goToAboutAFB.bind(this)
        this.goToATMBranches = this.goToATMBranches.bind(this)
        this.goToChangeLanguage = this.goToChangeLanguage.bind(this)
        this.goToChangePIN = this.goToChangePIN.bind(this)
        this.goToViewAllATM = this.goToViewAllATM.bind(this)
        this.goToViewAllBranches = this.goToViewAllBranches.bind(this)
    }

    //My Accounts
    goToMyAccounts(){
        this.props.changeSection('MyAccounts')
    }
    goToListOfAccounts(){
        this.props.changeSection('ListOfAccounts')
    }
    goToMoreInformation(){
        this.props.changeSection('MoreInformation')
    }
    goToAccountHistory(){
        this.props.changeSection('AccountHistory')
    }
    goToLast10Transactions(){
        this.props.changeSection('Last10Transactions')
    }

    //Fund Transfer
    goToFundTransfer(){
        this.props.changeSection('FundTransfer')
    }
    goToManageBeneficiaries(){
        this.props.changeSection('ManageBeneficiaries')
    }
    goToAccountToAccount(){
        this.props.changeSection('ToAFBAccounts')
    }
    goToToAFBAccounts(){
        this.props.changeSection('ToAFBAccounts')
    }
    goToToOtherBankAccounts(){
        this.props.changeSection('ToOtherBankAccounts')
    }
    goToManageRecurringTransactions(){
        this.props.changeSection('ManageRecurringTransactions')
    }

    //Manage Beneficiaries
    goToListOfBeneficiaries(){
        this.goToComingSoon()
    }
    goToAddABeneficiary(){
        this.goToComingSoon()
    }

    //Fixed Deposits
    goToFixedDeposits(){
        this.props.changeSection('FixedDeposits')
    }

    //Loans
    goToLoans(){
        this.props.changeSection('Loans')
    }


    //Cash Voushers
    goToCashVoushers(){
        this.props.changeSection('CashVoushers')
    }
    //Commerce
    goToCommerce(){
        this.goToComingSoon()
    }

    //Product and Service

    goToProductAndServices(){
        this.props.changeSection('ProductAndServices')
    }
    goToProduct(){
        this.props.changeSection('Product')
    }
    goToService(){
        this.props.changeSection('Service')
    }

    //Product
    goToCheckBookRequest(){
        this.props.changeSection('CheckBookRequest')
    }
    goToRequestToOpenAccount(){
        this.goToComingSoon()
    }
    goToSubscribeToBankAccount(){
        this.goToComingSoon()
    }

    //Service
    goToExchangeRates(){
        this.props.changeSection('ExchangeRates')
    }

    //BillPayments
    goToBillPayments(){
        this.props.changeSection('BillPayments')
    }

    //Chat
    goToChat(){
        this.props.changeSection('Chat')
    }

    //Complaints
    goToComplaints(){
        this.props.changeSection('Complaints')
    }

    //Settings
    goToSettings(){
        this.props.changeSection('Settings')
    }
    goToAboutAFB(){
        this.props.changeSection('AboutAFB')
    }
    goToATMBranches(){
        this.props.changeSection('ATMBranches')
    }
    goToChangeLanguage(){
        this.props.changeSection('ChangeLanguage')
    }
    goToChangePIN(){
        this.props.changeSection('ChangePIN')
    }

    //ATM Branches
    goToViewAllATM(){
        this.props.changeSection('ViewAllATM')
    }
    goToViewAllBranches(){
        this.props.changeSection('ViewAllBranches')
    }


    goToComingSoon(){
        alert("coming soon")
    }

    render() {
        return (
            <div className='left-container'>
                <Accordion defaultActiveKey="-1" style={{
                    cursor: "pointer"
                }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick = {this.goToMyAccounts}>
                            <Trans> 1. My Accounts</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="10" onClick = {this.goToListOfAccounts}>
                                            A. <Trans>List of Accounts</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>
                                                <Accordion defaultActiveKey="0">
                                                    <Card>
                                                        <Accordion.Toggle as={Card.Header} eventKey="100" onClick = {this.goToMoreInformation}>
                                                            i. <Trans>More Information</Trans>
                                                        </Accordion.Toggle>
                                                        <Accordion.Collapse eventKey="100" onClick = {this.goToAccountHistory}>
                                                            <Card.Body>
                                                                a. <Trans>Account History</Trans>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                        <Accordion.Collapse eventKey="100" onClick = {this.goToLast10Transactions}>
                                                            <Card.Body>
                                                                b. <Trans> Last 10 Transactions</Trans>
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

                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.goToFundTransfer}>
                            <Trans> 2. Fund Transfer</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Accordion defaultKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="11" onClick = {this.goToManageBeneficiaries}>
                                            A. <Trans>Manage Beneficiaries</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="11" onClick = {this.goToListOfBeneficiaries}>
                                            <Card.Body>
                                                i. <Trans>List of beneficiaries</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="11" onClick = {this.goToAddABeneficiary}>
                                            <Card.Body>
                                                ii. <Trans>Add a beneficiary</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1" onClick = {this.goToAccountToAccount}>
                            <Card.Body>
                                B. <Trans>Account to Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1" onClick = {this.goToToAFBAccounts}>
                            <Card.Body>
                                C. <Trans>To AFB accounts</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1" onClick = {this.goToToOtherBankAccounts}>
                            <Card.Body>
                                D. <Trans>To other bank's account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1" onClick = {this.goToManageRecurringTransactions}>
                            <Card.Body>
                                E. <Trans>Manage recurring Transactions</Trans>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick = {this.goToFixedDeposits}>
                            <Trans> 3. Fixed Deposits</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="3" onClick = {this.goToLoans}>
                            <Trans> 4. Loans</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {this.goToCashVoushers}>
                            <Trans> 5. Cash Vouchers</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="5" onClick = {this.goToCommerce}>
                            <Trans> 6. Commerce</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="6" onClick = {this.goToProductAndServices}>
                            <Trans> 7. Product and Services</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="16" onClick = {this.goToProduct}>
                                            i. <Trans>Product</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="16" onClick = {this.goToCheckBookRequest}>
                                            <Card.Body>
                                                a. <Trans>Cheque book requests </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="16" onClick = {this.goToRequestToOpenAccount}>
                                            <Card.Body>
                                                b. <Trans>Request to open a bank account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="16" onClick = {this.goToSubscribeToBankAccount}>
                                            <Card.Body>
                                                c. <Trans>Subscribe to a bank account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="17" onClick = {this.goToService}>
                                            ii. <Trans>Service</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="17" onClick = {this.goToExchangeRates}>
                                            <Card.Body>
                                                a. <Trans>Exchange Rates</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="7" onClick = {this.goToBillPayments}>
                            <Trans> 8. Bill Payments</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="8" onClick = {this.goToChat}>
                            <Trans> 9. Chat</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="9" onClick = {this.goToComplaints}>
                            <Trans> 10. Complaints </Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="1000" onClick = {this.goToSettings}>
                            <Trans> 11. Settings </Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1000" onClick = {this.goToAboutAFB}>
                            <Card.Body>
                                    A. <Trans>About AFB</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1000">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="200" onClick = {this.goToATMBranches}>
                                            B.<Trans>ATM Branches </Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="200" onClick = {this.goToViewAllATM}>
                                            <Card.Body>
                                                    i.<Trans>View all ATM </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                                <Accordion.Collapse eventKey="200" onClick = {this.goToViewAllBranches}>
                                                <Card.Body>
                                                    ii.<Trans>view all Branches </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>

                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1000" onClick = {this.goToChangeLanguage}>
                                    <Card.Body>
                                    C. <Trans>ChangeLanguage </Trans>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1000" onClick = {this.goToChangePIN}>
                                    <Card.Body>
                                    D. <Trans>Change PIN</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </div>
        )

    }

}