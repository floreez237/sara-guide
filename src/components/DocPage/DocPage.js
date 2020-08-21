import './Styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader";

class DocPage extends React.Component {
    render() {
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
                <div className="split-left">
                    <CustomAccordion/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default DocPage