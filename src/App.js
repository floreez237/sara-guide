import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent/MainComponent'
import {I18nProvider} from "@lingui/react";
import catalogFr from './locale/fr/messages';
import catalogEn from './locale/en/messages';


export default class App extends React.Component {
    state = {language:"en"}

    changeLanguage = (lang)=>this.setState({language:lang});

    catalogs= {en:catalogEn,fr:catalogFr}
    render() {
        return (
            <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                <MainComponent onChangeLanguage={this.changeLanguage}/>
            </I18nProvider>
        );
    }


}
