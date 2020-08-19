import React,{Component} from 'react';
import './split_style.scss';
import img1 from '../../resources/Afimage.jpg';
import img2 from '../../resources/bank-ca.jpg';

export default class Split extends  Component {


    render(){
        return (
            <div className="container">
                <div className="row" id="home">
                    <div className="column">
                        <a href="#women" className="men">SARA WALLET</a> <br/>
                        <img className="clothing" src={img1}/>

                    </div>
                    <div className="column">
                        <a href="#men" className="men">SARA BANKING</a> <br/>
                        <img src={img2}/>
                    </div>
                </div>
            </div>
        );
    }

}