import './styles.css';
import CustomAccordion from '../CustomAccordion/CustomAccordion';
import React from 'react';
import NavigationHeader from "../Header/NavigationHeader";
import {withRouter,Redirect} from 'react-router-dom';
import PaginationComponent from '../PaginationInnerComponent/PaginationInnerComponent';
import TONTINE_ITEMS from './sections/Tontines/Tontines';
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
                             <PaginationComponent title = "PaginationComponent" images = {[TONTINE_ITEMS[0].image]} description="dfdfjkjdsksdkjsdkjdasnsadokdjfoadijf"
                             titleClass="headerType2"/>
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