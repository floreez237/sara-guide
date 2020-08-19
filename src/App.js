import React from 'react';
import DropDown from "./components/Header/NavigationHeader";
import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent/MainComponent'
import Footing from './components/footer/Footer'
import CustomAccordion from './components/CustomAccordion/CustomAccordion'


function App() {
  return (
    <div>
        {/* <CustomAccordion/> */}
        <MainComponent/>
      {/* <Navigation/> */}
      {/* <LanguageHeader/> */}
    </div>
  );
}

export default App;
