import React from 'react';
import './NavigationHeader.scss';
import logo from './../../resources/images/Logo_Afriland.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Trans} from "@lingui/macro";

export default class NavigationHeader extends React.Component {
    // state = {
    //     selectedCountry: "Cameroon",
    //     selectedLanguage: "English"
    // };
    countries = {'Cameroon':<Trans>Cameroon</Trans>,
        'Ivory Coast':<Trans>Ivory Coast</Trans>,
        'Liberia':<Trans>Liberia</Trans>,
        'Guinea':<Trans>Guinea</Trans>,
        'Congo':<Trans>Congo</Trans>};

    languages = {'English':<Trans>English</Trans>,
        'French':<Trans>French</Trans>};
    onClickCountry = (country) => {
        if (this.props.selectedCountry !== country) {
            // this.setState({selectedCountry: country});
            this.props.onChangeCountry(country);
        }
    }

    onClickLanguage = (lang) => {
        if (this.props.selectedLanguage !== lang) {
            // this.setState({selectedLanguage: lang})
            if (lang === 'English') {
                this.props.onChangeLanguage("en");
            } else if (lang === 'French') {
                this.props.onChangeLanguage("fr");
            }
        }
    }

    render() {
        const countryItems = Object.keys(this.countries).map((country, id) =>
            <NavDropdown.Item key={id} onClick={() => this.onClickCountry(country)}>
                {this.countries[country]}
            </NavDropdown.Item>
        );

        const languageItems = Object.keys(this.languages).map((lang, id) => (
            <NavDropdown.Item key={id} onClick={() => this.onClickLanguage(lang)}>
                {this.languages[lang]}
            </NavDropdown.Item>
        ));
        return (
            <div>
                <input className="invisible" type="radio" name="tab" id="1" defaultChecked/>
                <input className="invisible" type="radio" name="tab" id="2"/>
                <input className="invisible" type="radio" name="tab" id="3"/>
                <div className="nav">
                    <img src={logo} alt="Afriland Logo" className="static-item grow"/>
                    <label htmlFor="1" className="item"><Trans>Home</Trans></label>
                    <label htmlFor="2" className="item"><Trans>Doc</Trans></label>
                    <label htmlFor="3" className="item"><Trans>Contact</Trans></label>
                    <Nav>
                        <NavDropdown title={this.countries[this.props.selectedCountry]} id="dropdown">
                            {countryItems}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title={this.languages[this.props.selectedLanguage]} id="dropdown">
                            {languageItems}
                        </NavDropdown>
                    </Nav>
                </div>
            </div>
        );
    }
}