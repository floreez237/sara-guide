import React,{Component} from 'react';
import './split_style.scss';
import img1 from 'http://images.eurogamer.net/2016/metabomb/reinhardttrivial5.jpg';
import img2 from 'https://images8.alphacoders.com/702/thumb-1920-702883.jpg';

export default class Split extends  Component {


    render(){
        return (
            <div className="container">
                <div className="row" id="home">
                    <div className="column">
                        <a href="#women" className="men">WOMEN</a> <br/>
                        <button className="buy"><a href="#womenShop">SHOP</a></button>
                        <img className="clothing" src="https://i.pinimg.com/originals/49/f7/48/49f7481952681610b7a4a8e1e2aa8e5b.jpg"/>

                    </div>
                    <div className="column">
                        <a href="#men" className="men">MEN</a> <br/>
                        <button className="buy"><a href="#menShop">SHOP</a></button>
                        <img src="https://i.pinimg.com/originals/67/19/ac/6719acd0d5901cfac3be51777d2b5171.jpg"/>
                    </div>
                    <div className="column">
                        <a href="#kids" className="men">KIDS</a> <br/>
                        <button className="buy"><a href="kidsShop">SHOP</a></button>
                        <img className="clothing" src="https://i.pinimg.com/originals/c6/45/ef/c645ef90429ac3e800f40080476f0151.jpg"/>
                    </div>
                </div>
            </div>
        );
    }

}
