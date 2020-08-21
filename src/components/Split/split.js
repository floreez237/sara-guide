import React, {Component} from 'react';
import './split_style.scss';
import img1 from '../../resources/Afimage.jpg';
import {withRouter} from 'react-router-dom';

class Split extends Component {

    loadDoc = ()=>{
        this.props.onChangeRadioButtons([false,true,false])
        this.props.history.push('/doc',{isAccessible:true});
    }
    render() {
        return (
            <div className="container ">
                <div className="row" id="home">
                    <div className="column large-effect">
                        <p className="title">SARA WALLET</p> <br/>
                            <img onClick={this.loadDoc} src={img1} alt="Sara Wallet"/>


                    </div>
                    <div className="column large-effect">
                        <p className="title">SARA BANKING</p> <br />
                        <img src={img1} alt="Sara Banking" />
                    </div>
                </div>

            </div>
        );
    }

}

export default withRouter(Split);