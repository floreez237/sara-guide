import React from 'react'
import "./PaginationInnerComponent.scss"


export default class PaginationInnerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.getImages = this.getImages.bind(this)
    }

    getImages() {
        // const MAX_SIZE = 50
        var imagesInJsx = []
        var imageWidth = ((100 / (this.props.images.length)))
        for (let i = 0; i < this.props.images.length; i++) {
            imagesInJsx.push(
                <div className="col" style={{ width: imageWidth + "%"}}>
                    <img src={this.props.images[i]} 
                    style={{ width:"100%", objectFit: "contain" }}
                    ></img>
                </div>)
        }
        return imagesInJsx
    }

    render() {
        return (
            <div>
                <div className = {this.props.PaginationTitleClass==="headerType1"? "mainTitle":"subTitle"}>
                    <text className="headerType1">{this.props.title}</text>
                </div>
                <div className="ro">
                    {this.props.images ? this.getImages() : null}
                </div>
            </div>
        )
    }
}