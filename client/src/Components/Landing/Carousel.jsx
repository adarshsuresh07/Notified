
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Notifiedcarousel extends Component {
    render() {
        return (
            <Carousel width={window.innerWidth > 700 ? "70vw" : null} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={require("../../Assets/gifs/add-todo.gif")} alt="" />
                    <p className="legend">Adding a todo</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/add-applied.gif")} alt="" />
                    <p className="legend">Moving to applied</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/remove-todo.gif")} alt="" />
                    <p className="legend">Removing from Todo</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/remove-applied.gif")} alt="" />
                    <p className="legend">Moving back to Todo</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/link-copy.gif")} alt="" />
                    <p className="legend">Copying link or Click on the ApplyLink button</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/new-op.gif")} alt="" />
                    <p className="legend">Adding new opportunity</p>
                </div>
                <div>
                    <img src={require("../../Assets/gifs/expired.gif")} alt="" />
                    <p className="legend">View the expired opportunities</p>
                </div>
            </Carousel>
        );
    }
}
