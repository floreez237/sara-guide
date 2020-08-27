import './styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader";
import {withRouter,Redirect} from 'react-router-dom';
import PaginationComponent from '../PaginationInnerComponent/PaginationInnerComponent'
import img from "../../resources/images/enfants.jpg"
import ACCOUNTS from "./sections/accounts/Accounts"
import ACCOUNTS_MANAGEMENT from "./sections/accounts/AccountManagement"
import BANK_ACCOUNTS from "./sections/accounts/BankAccounts"
import MY_BANK_ACCOUNT from "./sections/accounts/bank account/MyBankAccounts"
import BENEFICIARY_ACCOUNTS from "./sections/accounts/bank account/BeneficiaryAccounts"
import PaginationComponent from '../PaginationInnerComponent/PaginationInnerComponent';
import CASH_OUT_ITEMS from './sections/cash out/CashOut';


class DocPage extends React.Component {

    state = {section:"Accounts"}

    componentDidMount() {
        this.props.changeRadioButtons([false,true,false]);
    }

    getCurrentComponent(){
        switch(this.state.section){
            case ("Accounts") : {
                return <PaginationComponent description = {ACCOUNTS[0].description} images = {ACCOUNTS[0].image} title = {ACCOUNTS[0].title}/>
            }
            case ("AccountManagement") : {
                return <PaginationComponent description = {ACCOUNTS_MANAGEMENT[0].description} images = {ACCOUNTS_MANAGEMENT[0].image} title = {ACCOUNTS_MANAGEMENT[0].title}/>
            }
            case ("BankAccount") : {
                return <PaginationComponent description = {BANK_ACCOUNTS[0].description} images = {BANK_ACCOUNTS[0].image} title = {BANK_ACCOUNTS[0].title}/>
            }
            case ("MyBankAccount") : {
                return <PaginationComponent description = {MY_BANK_ACCOUNT[0].description} images = {MY_BANK_ACCOUNT[0].image} title = {MY_BANK_ACCOUNT[0].title}/>
            }
            case ("BeneficiaryAccounts") : {
                return <PaginationComponent description = {BENEFICIARY_ACCOUNTS[0].description} images = {BENEFICIARY_ACCOUNTS[0].image} title = {BENEFICIARY_ACCOUNTS[0].title}/>
            }
        }
    }

    render() {
        try{
            if (this.props.location.state.isAccessible) {
                return (
                    <div>
                        <div className="stickyTop">
                            <NavigationHeader onChangeLanguage={this.props.onChangeLanguage}
                                              onChangeCountry={this.props.onChangeCountry}
                                              selectedLanguage={this.props.selectedLanguage}
                                              selectedCountry={this.props.selectedCountry}
                                              radioButtons={this.props.radioButtons}/>
                        </div>
                        <div className="container-left">
                            <CustomAccordion changeSection = {(newSection) => this.setState({section : newSection})}/>
                        </div>
                        <div className="split-right">
                            {this.getCurrentComponent()}
                        </div>
                    </div>);
            }else{
                return (<Redirect to="/home"/>);
            }
        }catch (e) {
            return (<Redirect to="/home"/>);
        }
    }
}

export default withRouter(DocPage);