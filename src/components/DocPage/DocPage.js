import './styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader"
import { withRouter, Redirect } from 'react-router-dom'
import PaginationComponent from '../PaginationInnerComponent/PaginationInnerComponent'
import ACCOUNTS from "./sections/accounts/Accounts"
import ACCOUNTS_MANAGEMENT from "./sections/accounts/AccountManagement"
import BANK_ACCOUNTS from "./sections/accounts/BankAccounts"
import MY_BANK_ACCOUNT from "./sections/accounts/bank account/MyBankAccounts"
import BENEFICIARY_ACCOUNTS from "./sections/accounts/bank account/BeneficiaryAccounts"
import CASH_IN_ITEMS from './sections/cash in/CashIn'
import CASH_OUT_ITEMS from './sections/cash out/CashOut'
import FUND_TRANSFER_ITEMS from './sections/fund transfer/fund_transfer'
import PRODUCT_AND_SERVICE_ITEMS from './sections/product and service/product_and_service'
import PRODUCT from './sections/product and service/product/product'
import SERVICE from './sections/product and service/service/service'
import TOPUP from './sections/Top up/TopUp'
import AIR_TIME_ITEMS from './sections/Top up/Airtime/Airtime'
import TONTINE_ITEMS from "./sections/Tontines/Tontines"
import ROB_TONTINE_ITEMS from "./sections/Tontines/robs tontine/RobTontine"
import AFB_ACCOUNT_ITEMS from "./sections/fund transfer/AFB account/afb_account"
import SERVICE_PAYMENTS_ITEMS from "./sections/service payment/ServicePayment"
import EXCHANGE_RATE from './sections/product and service/service/exchange_rates/exchange_rates'
import SaraBankingAccordion from '../SaraBankingAccordion/SaraBankingAccordion'
import MY_ACCOUNTS from './sara banking/my accounts/list accounts/myAccounts'
import MORE_INFORMATION from './sara banking/my accounts/list accounts/more info/more_info'
import FUND_TRANSFER from './sara banking/fund transfer/fund_transfer'
// import MANAGE_BENEFICIARIES from './sara banking/fund transfer/'
import FIXED_DEPOSITS from "./sara banking/fixed deposits/fixed_deposites"
import LOANS from "./sara banking/loans/loans"
import CASH_VOUSHERS from "./sara banking/cash vouchers/cash_voushers"
// import COMMERCE from './sara banking/commerce/'
import PRODUCT_AND_SERVICE from "./sara banking/products and services/products_services"
import PRODUCT_ITEMS from "./sara banking/products and services/products/products"
import SERVICE_ITEMS from "./sara banking/products and services/services/services"
import BILL_PAYMENT from "./sara banking/bill payments/bill_payments"
import CHAT from "./sara banking/chat/Chat"
import COMPLAINTS from './sara banking/complaints/complaints'
import SETTINGS from "./sara banking/settings/settings"
import SETTINGS_ABOUT_AFB from "./sara banking/settings/about_afb/about_afb"
import SETTINGS_ATM_BRANCHES from "./sara banking/settings/atm_branches/atm_branches"
import CHANGE_LANGUAGE from "./sara banking/settings/change_language/change_language"
import SETTINGS_CHANGE_PIN from "./sara banking/settings/change_pin/change_pin"
import VIEW_ALL_ATM from "./sara banking/settings/atm_branches/view_all_atm/view_all_atm"
import VIEW_ALL_BRANCHES from "./sara banking/settings/atm_branches/view_all_branches/view_all_branches"


class DocPage extends React.Component {

    state = { saraMoneySection: "Accounts",
              saraBankingSection:"MyAccounts" }

    componentDidMount() {
        this.props.changeRadioButtons([false, true, false]);
    }

    getCurrentSaraBankingComponent(){
        switch (this.state.saraBankingSection){
             //My Accounts
            case("MyAccounts"): {
                return <PaginationComponent description={MY_ACCOUNTS[0].description} images={MY_ACCOUNTS[0].image} title={MY_ACCOUNTS[0].title}/>
            }
            case("ListOfAccounts"): {
                return <PaginationComponent description={MY_ACCOUNTS[0].description} images={MY_ACCOUNTS[0].image} title={MY_ACCOUNTS[0].title}/>
            }
            case("MoreInformation"): {
                return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            }
            case("AccountHistory"):{
                return <PaginationComponent description={MORE_INFORMATION[1].description} images={MORE_INFORMATION[1].image} title={MORE_INFORMATION[1].title}/>
            }
            case("Last10Transactions"): {
                return <PaginationComponent description={MORE_INFORMATION[2].description} images={MORE_INFORMATION[2].image} title={MORE_INFORMATION[2].title}/>
            }

            //Fund Transfer
            case("FundTransfer"): {
                return <PaginationComponent description={FUND_TRANSFER[0].description} images={FUND_TRANSFER[0].image} title={FUND_TRANSFER[0].title}/>
            }
            case("ManageBeneficiaries"): {
                return <PaginationComponent description={FUND_TRANSFER[1].description} images={FUND_TRANSFER[1].image} title={FUND_TRANSFER[1].title}/>
            }
            case("AccountToAccount"): {
                return <PaginationComponent description={FUND_TRANSFER[2].description} images={FUND_TRANSFER[2].image} title={FUND_TRANSFER[2].title}/>
            }
            case("ToAFBAccounts"): {
                return <PaginationComponent description={FUND_TRANSFER[3].description} images={FUND_TRANSFER[3].image} title={FUND_TRANSFER[3].title}/>
            }
            case("ToOtherBankAccounts"): {
                return <PaginationComponent description={FUND_TRANSFER[4].description} images={FUND_TRANSFER[4].image} title={FUND_TRANSFER[4].title}/>
            }
            case("ManageRecurringTransactions"): {
                return <PaginationComponent description={FUND_TRANSFER[5].description} images={FUND_TRANSFER[5].image} title={FUND_TRANSFER[5].title}/>
            }

            // //Manage Beneficiaries
            // case("ListOfBeneficiaries"): {
            //     return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            // }
            // case("AddABeneficiary"): {
            //     return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            // }

            //Fixed Deposits
            case("FixedDeposits"): {
                return <PaginationComponent description={FIXED_DEPOSITS[0].description} images={FIXED_DEPOSITS[0].image} title={FIXED_DEPOSITS[0].title}/>
            }

            //Loans
            case("Loans"): {
                return <PaginationComponent description={LOANS[0].description} images={LOANS[0].image} title={LOANS[0].title}/>
            }

            //Cash Voushers
            case("CashVoushers"): {
                return <PaginationComponent description={CASH_VOUSHERS[0].description} images={CASH_VOUSHERS[0].image} title={CASH_VOUSHERS[0].title}/>
            }

            // //Commerce
            // case("Commerce"): {
            //     return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            // }

            //ProductAndServices
            case("ProductAndServices"): {
                return <PaginationComponent description={PRODUCT_AND_SERVICE[0].description} images={PRODUCT_AND_SERVICE[0].image} title={PRODUCT_AND_SERVICE[0].title}/>
            }
            case("Product"): {
                return <PaginationComponent description={PRODUCT_AND_SERVICE[1].description} images={PRODUCT_AND_SERVICE[1].image} title={PRODUCT_AND_SERVICE[1].title}/>
            }
            case("Service"): {
                return <PaginationComponent description={PRODUCT_AND_SERVICE[2].description} images={PRODUCT_AND_SERVICE[2].image} title={PRODUCT_AND_SERVICE[2].title}/>
            }

            //Product
            case("CheckBookRequest"): {
                return <PaginationComponent description={PRODUCT_ITEMS[0].description} images={PRODUCT_ITEMS[0].image} title={PRODUCT_ITEMS[0].title}/>
            }
            // case("RequestToOpenAccount"): {
            //     return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            // }
            // case("SubscribeToBankAccount"): {
            //     return <PaginationComponent description={MORE_INFORMATION[0].description} images={MORE_INFORMATION[0].image} title={MORE_INFORMATION[0].title}/>
            // }

            //Service
            case("ExchangeRates"): {
                return <PaginationComponent description={SERVICE_ITEMS[0].description} images={SERVICE_ITEMS[0].image} title={SERVICE_ITEMS[0].title}/>
            }

            //BillPayments
            case("BillPayments"): {
                return <PaginationComponent description={BILL_PAYMENT[0].description} images={BILL_PAYMENT[0].image} title={BILL_PAYMENT[0].title}/>
            }

            //Chat
            case("Chat"): {
                return <PaginationComponent description={CHAT[0].description} images={CHAT[0].image} title={CHAT[0].title}/>
            }

            //Complaints
            case("Complaints"): {
                return <PaginationComponent description={COMPLAINTS[0].description} images={COMPLAINTS[0].image} title={COMPLAINTS[0].title}/>
            }

            //Settings
            case("Settings"): {
                return <PaginationComponent description={SETTINGS[0].description} images={SETTINGS[0].image} title={SETTINGS[0].title}/>
            }
            case("AboutAFB"): {
                return <PaginationComponent description={SETTINGS_ABOUT_AFB[0].description} images={SETTINGS_ABOUT_AFB[0].image} title={SETTINGS_ABOUT_AFB[0].title}/>
            }
            case("ATMBranches"): {
                return <PaginationComponent description={SETTINGS_ATM_BRANCHES[0].description} images={SETTINGS_ATM_BRANCHES[0].image} title={SETTINGS_ATM_BRANCHES[0].title}/>
            }
            case("ChangeLanguage"): {
                return <PaginationComponent description={CHANGE_LANGUAGE[0].description} images={CHANGE_LANGUAGE[0].image} title={CHANGE_LANGUAGE[0].title}/>
            }
            case("ChangePIN"): {
                return <PaginationComponent description={SETTINGS_CHANGE_PIN[0].description} images={SETTINGS_CHANGE_PIN[0].image} title={SETTINGS_CHANGE_PIN[0].title}/>
            }

            //ATM Branches
            case("ViewAllATM"): {
                return <PaginationComponent description={VIEW_ALL_ATM[0].description} images={VIEW_ALL_ATM[0].image} title={VIEW_ALL_ATM[0].title}/>
            }
            case("ViewAllBranches"): {
                return <PaginationComponent description={VIEW_ALL_BRANCHES[0].description} images={VIEW_ALL_BRANCHES[0].image} title={VIEW_ALL_BRANCHES[0].title}/>
            }
        }
        return null
    }

    getCurrentSaraMoneyComponent() {
        switch (this.state.saraMoneySection) {
            //Accounts
            case ("Accounts"): {
                return <PaginationComponent description={ACCOUNTS[0].description} images={ACCOUNTS[0].image} title={ACCOUNTS[0].title} />
            }
            case ("AccountManagement"): {
                return <PaginationComponent description={ACCOUNTS_MANAGEMENT[0].description} images={ACCOUNTS_MANAGEMENT[0].image} title={ACCOUNTS_MANAGEMENT[0].title} />
            }
            case ("EditUserDetails"): {
                return <PaginationComponent description={ACCOUNTS_MANAGEMENT[1].description} images={ACCOUNTS_MANAGEMENT[1].image} title={ACCOUNTS_MANAGEMENT[1].title} />
            }
            case ("ChangePIN"): {
                return <PaginationComponent description={ACCOUNTS_MANAGEMENT[2].description} images={ACCOUNTS_MANAGEMENT[2].image} title={ACCOUNTS_MANAGEMENT[2].title} />
            }
            case ("AddAddress"): {
                return <PaginationComponent description={ACCOUNTS_MANAGEMENT[3].description} images={ACCOUNTS_MANAGEMENT[3].image} title={ACCOUNTS_MANAGEMENT[3].title} />
            }
            case ("BankAccount"): {
                return <PaginationComponent description={BANK_ACCOUNTS[0].description} images={BANK_ACCOUNTS[0].image} title={BANK_ACCOUNTS[0].title} />
            }
            case ("MyBankAccount"): {
                return <PaginationComponent description={MY_BANK_ACCOUNT[0].description} images={MY_BANK_ACCOUNT[0].image} title={MY_BANK_ACCOUNT[0].title} />
            }
            case ("BeneficiaryAccounts"): {
                return <PaginationComponent description={BENEFICIARY_ACCOUNTS[0].description} images={BENEFICIARY_ACCOUNTS[0].image} title={BENEFICIARY_ACCOUNTS[0].title} />
            }

            //CashIn
            case ("CashIn"): {
                return <PaginationComponent description={CASH_IN_ITEMS[0].description} images={CASH_IN_ITEMS[0].image} title={CASH_IN_ITEMS[0].title} />
            }
            case ("CashInFromBank"): {
                return <PaginationComponent description={CASH_IN_ITEMS[1].description} images={CASH_IN_ITEMS[1].image} title={CASH_IN_ITEMS[1].title} />
            }

            //CashOut
            case ("CashOut"): {
                return <PaginationComponent description={CASH_OUT_ITEMS[0].description} images={CASH_OUT_ITEMS[0].image} title={CASH_OUT_ITEMS[0].title} />
            }
            case ("CashOutToBank"): {
                return <PaginationComponent description={CASH_OUT_ITEMS[1].description} images={CASH_OUT_ITEMS[1].image} title={CASH_OUT_ITEMS[1].title} />
            }

            //FundTransfer
            case ("FundTransfer"): {
                return <PaginationComponent description={FUND_TRANSFER_ITEMS[0].description} images={FUND_TRANSFER_ITEMS[0].image} title={FUND_TRANSFER_ITEMS[0].title} />
            }
            case ("ToOtherWallet"): {
                return <PaginationComponent description={FUND_TRANSFER_ITEMS[1].description} images={FUND_TRANSFER_ITEMS[1].image} title={FUND_TRANSFER_ITEMS[1].title} />
            }
            case ("ToAnAFBBank"): {
                return <PaginationComponent description={FUND_TRANSFER_ITEMS[2].description} images={FUND_TRANSFER_ITEMS[2].image} title={FUND_TRANSFER_ITEMS[2].title} />
            }
            case ("FlashTransfer"): {
                return <PaginationComponent description={FUND_TRANSFER_ITEMS[3].description} images={FUND_TRANSFER_ITEMS[3].image} title={FUND_TRANSFER_ITEMS[3].title} />
            }
            case ("ViaQRCode"): {
                return <PaginationComponent description={FUND_TRANSFER_ITEMS[4].description} images={FUND_TRANSFER_ITEMS[4].image} title={FUND_TRANSFER_ITEMS[4].title} />
            }

            //To AFBank
            case ("ChooseFromBeneficiary"): {
                return <PaginationComponent description={AFB_ACCOUNT_ITEMS[0].description} images={AFB_ACCOUNT_ITEMS[0].image} title={AFB_ACCOUNT_ITEMS[0].title} />
            }
            case ("EnterBeneficiaryAccount"): {
                return <PaginationComponent description={AFB_ACCOUNT_ITEMS[1].description} images={AFB_ACCOUNT_ITEMS[1].image} title={AFB_ACCOUNT_ITEMS[1].title} />
            }

            //ServicePayment
            case ("ServicePayment"): {
                return <PaginationComponent description={SERVICE_PAYMENTS_ITEMS[0].description} images={SERVICE_PAYMENTS_ITEMS[0].image} title={SERVICE_PAYMENTS_ITEMS[0].title} />
            }

            case ("PartnerTypes"): {
                return <PaginationComponent description={SERVICE_PAYMENTS_ITEMS[1].description} images={SERVICE_PAYMENTS_ITEMS[1].image} title={SERVICE_PAYMENTS_ITEMS[1].title} />
            }

            case ("Partners"): {
                return <PaginationComponent description={SERVICE_PAYMENTS_ITEMS[2].description} images={SERVICE_PAYMENTS_ITEMS[2].image} title={SERVICE_PAYMENTS_ITEMS[2].title} />
            }

            case ("PaymentProcedure"): {
                return <PaginationComponent description={SERVICE_PAYMENTS_ITEMS[3].description} images={SERVICE_PAYMENTS_ITEMS[3].image} title={SERVICE_PAYMENTS_ITEMS[3].title} />
            }

            //Product and service
            case ("ProductNService"): {
                return <PaginationComponent description={PRODUCT_AND_SERVICE_ITEMS[0].description} images={PRODUCT_AND_SERVICE_ITEMS[0].image} title={PRODUCT_AND_SERVICE_ITEMS[0].title} />
            }

            case ("Product"): {
                return <PaginationComponent description={PRODUCT[0].description} images={PRODUCT[0].image} title={PRODUCT[0].title} />
            }
            // case("SubscribtionForBankCard") : {

            // }
            // case("ApplicationForNewAccount") : {

            // }
            case ("Service"): {
                return <PaginationComponent description={SERVICE[0].description} images={SERVICE[0].image} title={SERVICE[0].title} />
            }

            case ("ExchangeRate"): {
                return <PaginationComponent description={EXCHANGE_RATE[0].description} images={EXCHANGE_RATE[0].image} title={EXCHANGE_RATE[0].title} />
            }

            //TopUp
            case ("TopUp"): {
                return <PaginationComponent description={TOPUP[0].description} images={TOPUP[0].image} title={TOPUP[0].title} />
            }
            case ("AirTime"): {
                return <PaginationComponent description={AIR_TIME_ITEMS[0].description} images={AIR_TIME_ITEMS[0].image} title={AIR_TIME_ITEMS[0].title} />
            }
            case ("AirTimeMyNumber"): {
                return <PaginationComponent description={AIR_TIME_ITEMS[1].description} images={AIR_TIME_ITEMS[1].image} title={AIR_TIME_ITEMS[1].title} />
            }
            case ("AirTimeOtherNumber"): {
                return <PaginationComponent description={AIR_TIME_ITEMS[2].description} images={AIR_TIME_ITEMS[2].image} title={AIR_TIME_ITEMS[2].title} />
            }
            // case("Data") : {
            //     // return <PaginationComponent description = {SERVICE[0].description} images = {SERVICE[0].image} title = {SERVICE[0].title}/>
            // }
            // case("DataMyNumber") : {
            //     // return <PaginationComponent description = {SERVICE[0].description} images = {SERVICE[0].image} title = {SERVICE[0].title}/>
            // }
            // case("DataOtherNumber") : {

            // }

            //Tontine
            case ("Tontine"): {
                return <PaginationComponent description={TONTINE_ITEMS[0].description} images={TONTINE_ITEMS[0].image} title={TONTINE_ITEMS[0].title} />
            }
            case ("RobsTontine"): {
                return <PaginationComponent description={TONTINE_ITEMS[1].description} images={TONTINE_ITEMS[1].image} title={TONTINE_ITEMS[1].title} />
            }
            case ("NewPayment"): {
                return <PaginationComponent description={ROB_TONTINE_ITEMS[0].description} images={ROB_TONTINE_ITEMS[0].image} title={ROB_TONTINE_ITEMS[0].title} />
            }
            case ("Contribute"): {
                return <PaginationComponent description={ROB_TONTINE_ITEMS[1].description} images={ROB_TONTINE_ITEMS[1].image} title={ROB_TONTINE_ITEMS[1].title} />
            }
            case ("TontineHistory"): {
                return <PaginationComponent description={ROB_TONTINE_ITEMS[2].description} images={ROB_TONTINE_ITEMS[2].image} title={ROB_TONTINE_ITEMS[2].title} />
            }
            case ("PendingApproval"): {
                return <PaginationComponent description={ROB_TONTINE_ITEMS[3].description} images={ROB_TONTINE_ITEMS[3].image} title={ROB_TONTINE_ITEMS[3].title} />
            }
            case ("PendingHistory"): {
                return <PaginationComponent description={ROB_TONTINE_ITEMS[4].description} images={ROB_TONTINE_ITEMS[4].image} title={ROB_TONTINE_ITEMS[4].title} />
            }

            //Chat
            // case("Chat") : {

            // }
        }
    }

    render() {
        try {
            if (this.props.location.state.isAccessible) {
                return (
                    <div>
                        <div className="stickyTop">
                            <NavigationHeader onChangeLanguage={this.props.onChangeLanguage}
                                onChangeCountry={this.props.onChangeCountry}
                                selectedLanguage={this.props.selectedLanguage}
                                selectedCountry={this.props.selectedCountry}
                                radioButtons={this.props.radioButtons} />
                        </div>
                        {this.props.location.state.page === "saraMoney" ?
                        <div>
                            <div className="container-left">
                                <CustomAccordion changeSection={(newSection) => this.setState({ saraMoneySection: newSection })} />
                            </div>
                            <div className="split-right">
                                {this.getCurrentSaraMoneyComponent()}
                            </div>
                        </div>
                        :
                        <div>
                            <div className="container-left">
                            <SaraBankingAccordion changeSection = {(newSection) => this.setState({saraBankingSection : newSection})}/>
                        </div>
                        <div className="split-right">
                            {this.getCurrentSaraBankingComponent()}
                        </div>
                        </div>
                        }

                    </div>);
            } else {
                return (<Redirect to="/home" />);
            }
        } catch (e) {
            return (<Redirect to="/home" />);
        }
    }
}

export default withRouter(DocPage);