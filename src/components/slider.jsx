import React, { Component } from 'react'
import   bg from "../images/bg.jpg"
 class Slider extends Component {
    render() {
        return (
            <div className="slider"> 
             <img src={bg} alt=" background cover image"/>
            </div>
        )
    }
}
export default Slider;
