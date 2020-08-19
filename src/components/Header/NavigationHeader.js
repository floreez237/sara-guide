import React from 'react';
import './NavigationHeader.scss';
import logo from './../../resources/images/Logo_Afriland.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationHeader extends React.Component {
    state={selectedCountry:"Country",
            selectedLanguage:"Language"};

    onClickCountry = (country)=>{
        this.setState({selectedCountry:country})
    }

    onClickLanguage = (lang) =>{
        this.setState({selectedLanguage:lang})
    }
    render() {
        const countries = ['Cameroon', 'Ivory Coast', 'Liberia', 'Guinea', 'Congo'];
        const countryItems = countries.map((country,id) =>
            <NavDropdown.Item key={id} onClick={()=>this.onClickCountry(country)}>
                {country}
            </NavDropdown.Item>
        );
        const languages = ['English','French']
        const languageItems = languages.map((lang,id)=>(
            <NavDropdown.Item key={id} onClick={()=>this.onClickLanguage(lang)}>
                {lang}
            </NavDropdown.Item>
        ));
        return (
            <div>
                <input className="invisible" type="radio" name="tab" id="1" defaultChecked/>
                <input className="invisible" type="radio" name="tab" id="2"/>
                <input className="invisible" type="radio" name="tab" id="3"/>
                <div className="nav">
                    <img src={logo} alt="Afriland Logo" className="static-item grow"/>
                    <label htmlFor="1" className="item">Home</label>
                    <label htmlFor="2" className="item">Doc</label>
                    <label htmlFor="3" className="item">Contact</label>
                    <Nav>
                        <NavDropdown title={this.state.selectedCountry} id="dropdown">
                            {countryItems}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title={this.state.selectedLanguage} id="dropdown">
                            {languageItems}
                        </NavDropdown>
                    </Nav>
                </div>
            </div>
        );
    }
}