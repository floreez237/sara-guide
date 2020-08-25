import './styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader";
import {withRouter,Redirect} from 'react-router-dom';

class DocPage extends React.Component {

    render() {
        try{
            if (this.props.location.state.isAccessible) {
                return (
                    <div>
                        <div>
                            <NavigationHeader onChangeLanguage={this.props.onChangeLanguage}
                                              onChangeCountry={this.props.onChangeCountry}
                                              selectedLanguage={this.props.selectedLanguage}
                                              selectedCountry={this.props.selectedCountry}
                                              radioButtons={this.props.radioButtons}
                                              onChangeButtons={this.props.changeRadioButtons}/>
                        </div>
                        <div className="container-left">
                            <CustomAccordion/>
                        </div>
                        <div>

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