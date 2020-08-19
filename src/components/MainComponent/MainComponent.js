import React from 'react';
import CustomCarousel from '../CustomCarousol/CustomCarousel';
import DropDown from '../Header/NavigationHeader';
import Footing from "../footer/Footer";

class MainComponent extends React.Component {
    render() {
        return (
            <div style = {{backgroundColor : "white"}}>
                <div style={{ marginBottom: "9px"}}>
                    <DropDown />
                </div>
                <div style = {{position : "relative"}}>
                    <CustomCarousel />
                </div>
                    <Footing />

            </div>
        )
    }
}

export default MainComponent