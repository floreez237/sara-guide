import React, {Component} from 'react';
import './split_style.scss';
import img1 from '../../resources/Afimage.jpg';

class Split extends Component {

    constructor(props) {
        super(props)
        this.goToSaraWallet = this.goToSaraWallet.bind(this)
    }
    goToSaraWallet(event) {
        // this.props.history.push("doc")
    }
    render() {
        return (
            <div className="container ">
                <div className="row" id="home">
                    <div className="column large-left">
                        {/* <div > */}
                        <a href="#women" className="men">SARA WALLET</a> <br/>
                        {/* <Link to="/Doc"> */}
                            <img onClick={this.goToSaraWallet} className="clothing" src={img1} alt="Sara Wallet" />
                        {/* </Link> */}

                        {/* </div> */}

                    </div>
                    <div className="column">
                        <a href="#men" className="men">SARA BANKING</a> <br />
                        <img src={img1} alt="Sara Banking" />
                    </div>
                </div>

            </div>
        );
    }

}

export default Split