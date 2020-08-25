import React from 'react'
import "./PaginationInnerComponent.scss"


export default class PaginationInnerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.getImages = this.getImages.bind(this)
    }

    getImages() {
        // <div>
        //     <text>
        //     {this.props.images[0]}junior
        //     </text>
        // </div>
        var imagesInJsx = []
        var imageWidth = (100 / (this.props.images.length)) - 2 * this.props.images.length - 4
        for (let i = 0; i < this.props.images.length; i++) {
            imagesInJsx.push(
            <div className="image">
                <img src={this.props.images[i]} style={{
                    maxWidth: imageWidth + "%",
                    margin: "1%",
                }}>
                </img>
            </div>)
        }
        return imagesInJsx
    }

    render() {
        return (
            <div>
                <text>
                    {this.props.title}
                </text>
                <div className="images-container">
                    {this.props.images ? this.getImages() : null}
                </div>
            </div>
        )
    }
}