import React from "react";
import {I18nProvider} from "@lingui/react";
import catalogFr from '../../locale/fr/messages';
import catalogEn from '../../locale/en/messages';
import MainComponent from '../MainComponent/MainComponent'
// import catalogFr from './locale/fr/messages';
// import catalogEn from './locale/en/messages';


class MainComponentLang extends React.Component {
    state = {language:"en"}
    changeLanguage = (lang)=>this.setState({language:lang});
    catalogs= {en:catalogEn,fr:catalogFr}

    render() {
        const {history} = this.props
        return (
            <div>
                <I18nProvider language={this.state.language} catalogs={this.catalogs}>
                    <MainComponent onChangeLanguage={this.changeLanguage}/>
                </I18nProvider>
            </div>
        )
    }
}


export default MainComponentLang
