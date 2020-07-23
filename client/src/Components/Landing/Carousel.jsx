
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
export default class Notifiedcarousel extends Component {
    render() {
        return (
            <Carousel width="70vw" autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={require("../../Assets/Images/1.png")} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("../../Assets/Images/2.png")} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require("../../Assets/Images/3.png")} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require("../../Assets/Images/4.png")} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require("../../Assets/Images/5.png")} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
