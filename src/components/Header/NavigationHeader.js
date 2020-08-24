import React from 'react';
import './NavigationHeader.scss';
import logo from './../../resources/images/Logo_Afriland.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Trans} from "@lingui/macro";
import {withRouter} from 'react-router-dom';

class NavigationHeader extends React.Component {
    countries = {'Cameroon':<Trans>Cameroon</Trans>,
        'Ivory Coast':<Trans>Ivory Coast</Trans>,
        'Liberia':<Trans>Liberia</Trans>,
        'Guinea':<Trans>Guinea</Trans>,
        'Congo':<Trans>Congo</Trans>};

    languages = {'English':<Trans>English</Trans>,
        'French':<Trans>French</Trans>};
    onClickCountry = (country) => {
        if (this.props.selectedCountry !== country) {
            this.props.onChangeCountry(country);
        }
    }

    onClickLanguage = (lang) => {
        if (this.props.selectedLanguage !== lang) {
            if (lang === 'English') {
                this.props.onChangeLanguage("en");
            } else if (lang === 'French') {
                this.props.onChangeLanguage("fr");
            }
        }
    }
    arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    onLabelCLick = (e)=>{
        const targetId = e.target.id;
        const prevRadioButtons = this.props.radioButtons;
        if (targetId === 'home') {
            if (!this.arrayEquals(prevRadioButtons, [true, false, false])) {
                console.log(targetId);
                this.props.history.push('/home');
                this.props.onChangeButtons([true, false, false]);
            }
        } else if (targetId === 'contact') {
            if (!this.arrayEquals(prevRadioButtons, [false, false, true])) {
                this.props.onChangeButtons([false, false, true]);
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
            <div style={{backgroundColor:"white", paddingBottom:"7px"}}>
                <input className="invisible" type="radio" name="tab" id="1" checked={this.props.radioButtons[0]}/>
                <input className="invisible" type="radio" name="tab" id="2" checked={this.props.radioButtons[1]}/>
                <input className="invisible" type="radio" name="tab" id="3" checked={this.props.radioButtons[2]}/>
                <div className="nav">
                    <img src={logo} alt="Afriland Logo" className="static-item grow"/>
                    <label id="home" className="item"
                                 onClick={(event => this.onLabelCLick(event))}><Trans>Home</Trans></label>
                    <label id="Doc" className="item"  onClick={(event => this.onLabelCLick(event))}><Trans>Doc</Trans></label>
                    <label id="contact" className="item"  onClick={(event => this.onLabelCLick(event))}><Trans>Contact</Trans></label>
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

export default withRouter(NavigationHeader);