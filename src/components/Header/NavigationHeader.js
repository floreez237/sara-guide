import React from 'react';
import './NavigationHeader.scss';
import logo from './../../resources/images/Logo_Afriland.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationHeader extends React.Component {

    render() {
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
                        <NavDropdown title="Country" id="dropdown">
                            <NavDropdown.Item>Cameroon</NavDropdown.Item>
                            <NavDropdown.Item>Ivory Coast</NavDropdown.Item>
                            <NavDropdown.Item>Liberia</NavDropdown.Item>
                            <NavDropdown.Item>Guinea</NavDropdown.Item>
                            <NavDropdown.Item>Congo</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Language" id="dropdown">
                            <NavDropdown.Item>English</NavDropdown.Item>
                            <NavDropdown.Item>French</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </div>
        );
    }
}