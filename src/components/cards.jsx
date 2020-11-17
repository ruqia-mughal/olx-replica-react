import React, { Component } from 'react'
import { Card, CardFooter, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import heart from "../fontawesome-web/svgs/regular/heart.svg"
// import avatar from "../images/avatar.png"
import olx from "../images/olxx.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cards_main">
                <Card className="card" >
                    <CardImg width="100%" src={olx} alt=" products images" />
                    <CardImgOverlay className="cardimg_overlay">
                        <CardTitle className="title"> {this.props.products.title}   
                       </CardTitle>
                      <img  className="heart" src={heart} alt="heart icon"/>
                    </CardImgOverlay>
                    <CardBody>
                        <CardTitle className="main_title">{this.props.products.price} </CardTitle>
                        <CardText className="description">{this.props.products.description} </CardText>
                        <CardFooter className=" footer">
                            <h5>{this.props.products.location} </h5>
                            <small className="text-muted">{this.props.products.time} </small>

                        </CardFooter>

                    </CardBody>
                </Card>
            </div>
        )
    }
}



















