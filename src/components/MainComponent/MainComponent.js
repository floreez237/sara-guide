import React from 'react';
import CustomCarousel from '../CustomCarousol/CustomCarousel';
import NavigationHeader from '../Header/NavigationHeader';
import Footing from "../footer/Footer";
import Split from "../Split/split"
import CustomAccordion from "../CustomAccordion/CustomAccordion"

class MainComponent extends React.Component {

    render() {
        const { onChangeLanguage } = this.props
        return (


            <div style={{ backgroundColor: "white" }}>
                    <div style={{ marginBottom: "9px" }}>
                        <NavigationHeader onChangeLanguage={onChangeLanguage} />
                    </div>
                    <div style={{ position: "relative", }}>
                        <CustomCarousel />
                    </div>
                    <div style={{ backgroundColor: "#f4f4f4" }}>
                        <Split />
                    </div>
                    <Footing />
            </div>
            // <CustomAccordion/>
        )
    }
}

export default MainComponent