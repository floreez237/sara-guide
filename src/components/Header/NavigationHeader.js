import React from 'react';
import './NavigationHeader.scss';
import logo from './../../resources/images/Afriland logo.ico';

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
                </div>
            </div>
        );
    }
}