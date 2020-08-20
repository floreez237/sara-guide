import './Styles.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'
import React from 'react'

class DocPage extends React.Component{
    render(){
        return(
            <div>
                <div class = "split-left">
                    <CustomAccordion/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default DocPage