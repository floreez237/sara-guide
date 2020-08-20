import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import {I18nProvider} from "@lingui/react";
import catalogFr from '../../locale/fr/messages';
import catalogEn from '../../locale/en/messages';


class Navigation extends React.Component {
    state = {language:"en"}

    changeLanguage = (lang)=>this.setState({language:lang});

    catalogs= {en:catalogEn,fr:catalogFr}
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' render={(routeProps) => (
                            <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                                <MainComponent onChangeLanguage={this.changeLanguage} {...routeProps} />
                            </I18nProvider>)} />

                        <Route path='/Doc' render={(routeProps) => (<CustomAccordion
                            {...routeProps} />)} />

                        {/* 
                        <Route path='/Form3' render={(routeProps) => (<Form3
                            {...routeProps} />)} />

                        <Route path='/Form4' render={(routeProps) => (<Form4
                            {...routeProps} />)} /> */}

                    </Switch>

                </div>
            </Router>

        )
    }
}

export default Navigation;