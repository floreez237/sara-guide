import React from 'react';
import CustomCarousel from '../CustomCarousol/CustomCarousel';
import DropDown from '../Header/NavigationHeader';
import Footing from "../footer/Footer";
import Split from "../Split/split"

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
                <div style = {{backgroundColor: "#f4f4f4"}}>
                    <Split/>
                </div>
                    <Footing />

            </div>
        )
    }
}

export default MainComponent