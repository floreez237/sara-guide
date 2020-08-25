import React from 'react';
import CustomCarousel from '../CustomCarousol/CustomCarousel';
import NavigationHeader from '../Header/NavigationHeader';
import Footing from "../footer/Footer";
import Split from "../Split/split"

class MainComponent extends React.Component {

    componentDidMount() {
        this.props.changeRadioButtons([true, false, false]);
    }

    render() {
        return (
            <div style={{backgroundColor: "white"}}>
                <div style={{marginBottom: "9px"}}>
                    <NavigationHeader onChangeLanguage={this.props.onChangeLanguage}
                                      onChangeCountry={this.props.onChangeCountry}
                                      selectedLanguage={this.props.selectedLanguage}
                                      selectedCountry={this.props.selectedCountry}
                                      radioButtons={this.props.radioButtons}
                                      onChangeButtons={this.props.changeRadioButtons}
                    />
                </div>
                <div style={{position: "relative",}}>
                    <CustomCarousel/>
                </div>
                <div style={{backgroundColor: "#f4f4f4"}}>
                    <Split onChangeRadioButtons={this.props.changeRadioButtons}/>
                </div>
                <Footing/>
            </div>
            // <CustomAccordion/>
        )
    }
}

export default MainComponent