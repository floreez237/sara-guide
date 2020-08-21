import React from 'react';
import Navigation from './components/Navigation/Navigation'
import catalogFr from './locale/fr/messages';
import catalogEn from './locale/en/messages';



export default class App extends React.Component {
    state = {language:"en"}

    changeLanguage = (lang)=>this.setState({language:lang});

    catalogs= {en:catalogEn,fr:catalogFr}
    render() {
        return (
            <Navigation/>
        );
    }
}
