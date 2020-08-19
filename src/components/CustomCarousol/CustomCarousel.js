import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import './styles.css'
import image1 from '../../resources/images/image1.png'
import image2 from '../../resources/images/image2.png'
import image3 from '../../resources/images/image3.jpg'
import image4 from '../../resources/images/image4.jpg'
import Image from 'react-bootstrap/Image'
// import image5 from '../resources/images/image.jpg'

class CustomCarousel extends React.Component {

    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 1
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        const maxHeight = "92%"
        return (
            <div
            // style = {{position : "fixed",
            //           marginBottom : "20px"}}
            >
                <Carousel
                    swipeable={false}
                    // draggable={false}
                    // showDots={true}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"

                    style={{ height: "70%", }}
                >
                    <div>
                        <center>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 680,
                                    resizeMode: 'stretch',
                                    backgroundImage: `url(${image1})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    borderStyle: "none",
                                }}
                            // source={image1}
                            />
                        </center>
                    </div>

                    <div>
                        <center>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 680,
                                    resizeMode: 'stretch',
                                    backgroundImage: `url(${image2})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    borderStyle: "none",
                                }}
                            // source={image2}
                            />
                        </center>
                    </div>

                    <div>
                        <center>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 680,
                                    resizeMode: 'stretch',
                                    backgroundImage: `url(${image3})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    borderStyle: "none",
                                }}
                            // source={image1}
                            />
                        </center>
                    </div>

                    <div>
                        <center>
                            <Image
                                style={{
                                    width: "100%",
                                    height: 680,
                                    resizeMode: 'stretch',
                                    backgroundImage: `url(${image4})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    borderStyle: "none",
                                }}
                            // source={image1}
                            />
                        </center>

                    </div>

                    {/* <div style={{
                        backgroundImage: `url(${image1})`,
                        width: "100%",
                        height: "80%",
                        maxHeight: { maxHeight },
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // opacity: .9,
                    }}></div>
                    <div style={{
                        backgroundImage: `url(${image2})`,
                        width: "100%",
                        height: "90%",
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // opacity: .9,
                    }}></div>
                    <div style={{
                        backgroundImage: `url(${image3})`,
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // opacity: .9,
                    }}></div>
                    <div style={{
                        backgroundImage: `url(${image4})`,
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // opacity: .9,
                    }}></div> */}
                    {/* <div style={{
                        backgroundImage: `url(${image5})`,
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: .9,
                    }}></div> */}
                    {/* <div><img src={image2} alt="image2" /></div> */}
                    {/* <div><img src={image2} alt="image2" /></div>
                    <div><img src={image3} alt="image3" /></div>
                    <div><img src={image4} alt="image4" /></div> */}
                </Carousel>
            </div>
        )
    }
}

export default CustomCarousel;



