import React from 'react';
import Navigation from './components/Navigation/Navigation'
import catalogFr from './locale/fr/messages';
import catalogEn from './locale/en/messages';



export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
        );
    }
}
