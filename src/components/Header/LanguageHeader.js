import React from "react";
import CustomDropDown from "../Dropdown/CustomDropdown";
import './LanguageHeader.css';

export default class LanguageHeader extends React.Component {

    render() {
        return (
            <div className="head">
                <CustomDropDown/>
                <CustomDropDown/>
            </div>
        );
    }
};