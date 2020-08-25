import './Styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'
import NavigationHeader from "../Header/NavigationHeader";
import {withRouter,Redirect} from 'react-router-dom';

class DocPage extends React.Component {

    componentDidMount() {
        this.props.changeRadioButtons([false,true,false]);
    }

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
                                              radioButtons={this.props.radioButtons}/>
                        </div>
                        <div className="split-left">
                            <CustomAccordion selectedCountry={this.props.selectedCountry}/>
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