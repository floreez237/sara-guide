import './styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader";
import {withRouter,Redirect} from 'react-router-dom';
import PaginationComponent from '../PaginationInnerComponent/PaginationInnerComponent';
import CASH_OUT_ITEMS from './sections/cash out/CashOut';


class DocPage extends React.Component {

    componentDidMount() {
        this.props.changeRadioButtons([false,true,false]);
    }

    render() {
        try{
            if (this.props.location.state.isAccessible) {
                return (
                    <div >
                        <div className="stickyTop">
                            <NavigationHeader onChangeLanguage={this.props.onChangeLanguage}
                                              onChangeCountry={this.props.onChangeCountry}
                                              selectedLanguage={this.props.selectedLanguage}
                                              selectedCountry={this.props.selectedCountry}
                                              radioButtons={this.props.radioButtons}/>
                        </div>
                        <div className="container-left">
                            <CustomAccordion/>
                        </div>
                        <div className="split-right">
                             <PaginationComponent title ={CASH_OUT_ITEMS[0].title} images = {CASH_OUT_ITEMS[0].image}/>
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