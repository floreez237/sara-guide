import React from 'react';
import Navigation from './components/Header/NavigationHeader';
import LanguageHeader from './components/Header/LanguageHeader';
import Footing from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navigation/>
      <LanguageHeader/>
      <Footing/>
    </div>
  );
}

export default App;
