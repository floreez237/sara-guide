import React from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import catalogFr from '../../locale/fr/messages';
import catalogEn from '../../locale/en/messages';
import DocPage from "../DocPage/DocPage";
import MainComponent from "../MainComponent/MainComponent";
import {I18nProvider} from "@lingui/react";


class Navigation extends React.Component {
    state = {
        language: "en",
        selectedCountry: "Cameroon",
        radioButtons: [true, false, false]
    };

    changeRadioButtons = (radioButtons) => this.setState({radioButtons: radioButtons});

    changeLanguage = (lang) => this.setState({language: lang});

    changeCountry = (country) => this.setState({selectedCountry: country});


    catalogs = {en: catalogEn, fr: catalogFr}

    deriveSelectedLanguage = (langCode) => {
        switch (langCode) {
            case 'en':
                return 'English';
            case 'fr':
                return 'French';
            default:
                return "No Lang";
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/home' render={() => {
                            return (
                                <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                                    <MainComponent onChangeLanguage={this.changeLanguage}
                                                   selectedLanguage={this.deriveSelectedLanguage(this.state.language)}
                                                   selectedCountry={this.state.selectedCountry}
                                                   onChangeCountry={this.changeCountry}
                                                   radioButtons={this.state.radioButtons}
                                                   changeRadioButtons={this.changeRadioButtons}/>
                                </I18nProvider>
                            )

                        }}/>

                        <Route exact path="/">
                            <Redirect push to='/home'/>
                        </Route>
                        <Route path='/Doc' render={() => {
                            return (
                                <div>
                                    <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                                    <DocPage onChangeLanguage={this.changeLanguage}
                                             selectedLanguage={this.deriveSelectedLanguage(this.state.language)}
                                             selectedCountry={this.state.selectedCountry}
                                             onChangeCountry={this.changeCountry}
                                             radioButtons={this.state.radioButtons}
                                             changeRadioButtons={this.changeRadioButtons}/>

                                </I18nProvider>
                                </div>
                                
                            )
                        }}>
                        </Route>

                    </Switch>

                </div>
            </Router>

        );
    }
}

export default Navigation;