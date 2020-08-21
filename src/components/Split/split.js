import React, {Component} from 'react';
import './split_style.scss';
import img1 from '../../resources/Afimage.jpg';
import {Link} from 'react-router-dom'

class Split extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row" id="home">
                    <div className="column large-left">
                        {/* <div > */}
                        <p className="men">SARA WALLET</p> <br/>
                        <Link to="/Doc">
                            <img onClick={()=>this.props.onChangeRadioButtons([false,true,false])} className="clothing" src={img1} alt="Sara Wallet"/>
                        </Link>

                    </div>
                    <div className="column">
                        <p className="men">SARA BANKING</p> <br />
                        <img src={img1} alt="Sara Banking" />
                    </div>
                </div>

            </div>
        );
    }

}

export default Split