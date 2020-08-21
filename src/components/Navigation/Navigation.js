import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import catalogFr from '../../locale/fr/messages';
import catalogEn from '../../locale/en/messages';
import MainComponentLang from '../MainComponentLang/MainComponentLang'
import DocPage from "../DocPage/DocPage";
import MainComponent from "../MainComponent/MainComponent";
import { I18nProvider } from "@lingui/react";


class Navigation extends React.Component {
    state = {
        language: "en",
        selectedCountry: "Cameroon"
    };

    changeLanguage = (lang) => this.setState({ language: lang });

    changeCountry = (country) => this.setState({ selectedCountry: country })


    catalogs = { en: catalogEn, fr: catalogFr }

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
                        <Route exact path='/' render={() => {
                            return (
                                <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                                    <MainComponent onChangeLanguage={this.changeLanguage} selectedLanguage={this.deriveSelectedLanguage(this.state.language)}
                                        selectedCountry={this.state.selectedCountry} onChangeCountry={this.changeCountry} />
                                </I18nProvider>
                            )

                        }}>

                        </Route>

                        <Route path='/Doc' render={() => {
                            return (
                                <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                                    <DocPage onChangeLanguage={this.changeLanguage} selectedLanguage={this.deriveSelectedLanguage(this.state.language)}
                                        selectedCountry={this.state.selectedCountry} onChangeCountry={this.changeCountry} />
                                </I18nProvider>
                            )
                        }}>
                        </Route>

                    </Switch>

                </div>
            </Router>

        )
    }
}

export default Navigation;