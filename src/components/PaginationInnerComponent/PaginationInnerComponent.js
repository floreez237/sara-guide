import React from 'react'
import "./PaginationInnerComponent.scss"


export default class PaginationInnerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.getImages = this.getImages.bind(this)
    }

    getImages() {
        const MAX_WIDTH = 20
        const largeContainerWidth = 100 * (this.props.images.length)
        var imageWidth = (largeContainerWidth/100)*MAX_WIDTH
        if(imageWidth > 100){
            imageWidth = 100
        }

        var imagesInJsx = []
        
        for (let i = 0; i < this.props.images.length; i++) {
            imagesInJsx.push(
                <div className="col">
                    <img src={this.props.images[i]}
                        style={{  width:imageWidth  + "%"  }}
                    ></img>
                </div>)
        }
        return imagesInJsx
    }

    render() {
        return (
            <div>
                <div className={this.props.PaginationTitleClass? this.props.PaginationTitleClass === "headerType1" ? "mainTitle" : "subTitle" : "mainTitle"}>
                    <text className={this.props.PaginationTitleClass?this.props.PaginationTitleClass : "headerType1"}>{this.props.title}</text>
                </div>
                <div className="cen" >
                    <div className="ro">
                        {this.props.images ? this.getImages() : null}
                    </div>
                </div>
                <div className="description">
                    <text>{this.props.description}</text>
                </div>

            </div>
        )
    }
}