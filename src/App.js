import React from 'react';
import MainComponent from './components/MainComponent/MainComponent'
// import {Router} from 'react-router-dom'


import Footing from './components/footer/Footer'
import CustomAccordion from './components/CustomAccordion/CustomAccordion'
import DocPage from './components/DocPage/DocPage'
// import Navigation from './components/Header/NavigationHeader'
import Navigation from './components/Navigation/Navigation'
import MainComponentLang from './components/MainComponentLang/MainComponentLang'
import Split from './components/Split/split'


// function App() {
//   return (
//     <div>
//       <Navigation/>
//       <DocPage/>
//         {/* <CustomAccordion/> */}
//         {/* <MainComponent/> */}
//       {/* <Navigation/> */}
//       {/* <LanguageHeader/> */}
//     </div>
//   );
// }

import {I18nProvider} from "@lingui/react";
import catalogFr from './locale/fr/messages';
import catalogEn from './locale/en/messages';
import { Router } from 'react-router-dom';


export default class App extends React.Component {
    state = {language:"en"}

    changeLanguage = (lang)=>this.setState({language:lang});

    catalogs= {en:catalogEn,fr:catalogFr}
    render() {
        return (
          // <CustomAccordion/>
            // <I18nProvider language={this.state.language} catalogs={this.catalogs}>
            //     <MainComponent onChangeLanguage={this.changeLanguage}/>
            // </I18nProvider>
            // <MainComponentLang/>
            // <Navigation/>
            // <Router>
              <Split/>
            // </Router>
            
        );
    }
}
