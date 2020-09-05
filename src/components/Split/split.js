import React, {Component} from 'react';
import './split_style.scss';
import img1 from '../../resources/Afimage.jpg';
import {withRouter} from 'react-router-dom'

class Split extends Component {
    state = {
        positionCursor: "none"
    }

    constructor(props) {
        super(props)
        this.handleLeftEntered = this.handleLeftEntered.bind(this)
        this.handleLeftLeaved = this.handleLeftLeaved.bind(this)
        this.handleRightEntered = this.handleRightEntered.bind(this)
        this.handleRightLeaved = this.handleRightLeaved.bind(this)
        this.handleLeftClicked = this.handleLeftClicked.bind(this)
        this.handleRightClicked = this.handleRightClicked.bind(this)
    }


    //methods for left image
    handleLeftClicked() {
        this.props.history.push("Doc", {isAccessible:true, page:"saraMoney"})
        this.props.onChangeRadioButtons([false, true, false])
    }

    handleRightClicked() {
        this.props.history.push("Doc", {isAccessible:true, page:"saraBanking"})
        this.props.onChangeRadioButtons([false, true, false])
    }

    handleLeftEntered() {
        this.setState({ positionCursor: "left" })
    }

    handleLeftLeaved() {
        this.setState({ positionCursor: "none" })
    }

    getLeftClassName() {
        return "image left " + this.getLeftClassByPosition()
    }

    getLeftClassByPosition() {
        if (this.state.positionCursor === "none") {
            return ""
        }
        else if (this.state.positionCursor === "left") {
            return "enlarge"
        }
        else if (this.state.positionCursor === "right") {
            return "shrink"
        }
    }


    //methods for right image
    handleRightEntered() {
        this.setState({ positionCursor: "right" })

    }

    handleRightLeaved() {
        this.setState({ positionCursor: "none" })
    }

    getRightClassName() {
        return "image right " + this.getRightClassByPosition()
    }

    getRightClassByPosition() {
        if (this.state.positionCursor === "none") {
            return ""
        }
        else if (this.state.positionCursor === "left") {
            return "shrink"
        }
        else if (this.state.positionCursor === "right") {
            return "enlarge"
        }
    }



    render() {
        return (
            <div className="container-images">
                <div className={this.getLeftClassName()} style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // width:"100%",
                }}
                    onMouseEnter={this.handleLeftEntered}
                    onMouseLeave={this.handleLeftLeaved}
                    onClick={this.handleLeftClicked}
                >
                    <div className = "textLeft">
                        <text>SARA MONEY</text>
                    </div>
                </div>
                <div className={this.getRightClassName()} style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // width:"100%",
                }}
                    onMouseEnter={this.handleRightEntered}
                    onMouseLeave={this.handleRightLeaved}
                    onClick = {this.handleRightClicked}
                >
                    <div className = "textRight">
                        <text>SARA BANKING</text>
                    </div>
                        
                </div>
            </div>

        );
    }

}

export default withRouter(Split)
