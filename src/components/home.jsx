import React, { Component } from 'react'
import app from "../images/phone-app.png"
import download from "../images/download apple.png"
import playstore from "../images/playstore_2x.png"
import { Row, Col } from 'reactstrap';

class Ffooter extends Component {
    render() {
        return (
            <React.Fragment>

                <Row className="apple_ribbon">
                    <Col className="col_1" xl="1" lg="1" md="1" sm="0" xs="0"></Col>
                    <Col className="col_2" xl="7" lg="7" md="7" sm="7" xs="7">

                        <img src={app} alt="olx mobile app" />

                        <div>
                            <h5>TRY THE OLX APP</h5>
                            <p> Buy, sell and find just about anything using the app on your mobile </p>
                        </div>

                    </Col>
                    <Col className="col_3" xl="3" lg="3" md="3" sm="5" xs="5">
                        <div>
                            <small>Get Your App Today</small>
                        </div>
                        <div className="img_div">
                            <img src={download} alt="get app on apple" />
                            <img src={playstore} alt="get app on mobile playstore" />
                        </div>

                    </Col>
                    <Col className="col_1" xl="1" lg="1" md="1" sm="0" xs="0"></Col>

                </Row>
                <Row className="footer_last">
                    <Col xl="1" lg="1" md="1" sm="0" xs="0"></Col>
                    <Col className="flex" xl="3" lg="3" md="3" sm="3" xs="3" >
                        <h5>POPULAR CATEGORIES</h5>
                        <h6> Cars</h6>
                        <h6>Flats for rent</h6>
                        <h6> Mobile Phones</h6>
                        <h6>Jobs</h6>
                    </Col>
                    <Col className="flex" xl="3" lg="3" md="3" sm="3" xs="3" >
                        <h5>TRENDING SEARCHES</h5>
                        <h6> Bikes</h6>
                        <h6>Dogs</h6>
                        <h6> Watches</h6>
                        <h6>Books</h6>
                    </Col>
                    <Col className="flex" xl="2" lg="2" md="2" sm="3" xs="3" >
                        <h5>ABOUT US</h5>
                        <h6> About OLX Group</h6>
                        <h6>OLX Blog</h6>
                        <h6> Contact Us</h6>
                        <h6>OLX for Businesses</h6>
                    </Col>
                    <Col className="flex" xl="2" lg="2" md="2" sm="3" xs="3" >
                        <h5>OLX</h5>
                        <h6> Help</h6>
                        <h6>Sitemap</h6>
                        <h6> Contact Us</h6>
                        <h6>Legal & Privacy information</h6>
                    </Col>
                    <Col xl="1" lg="1" md="1" sm="0" xs="0"></Col>
                </Row>
                <Row>
                    <Col className="footer_ft " xl="12" lg="12" md="12" sm="12" xs="12">
                        <div className="ft_1" xl="6" lg="6" md="6" sm="6" xs="6"> <p> Other Countries India - South Africa - Indonesia  </p> </div>

                        <div className="ft_2" xl="6" lg="6" md="6" sm="6" xs="6"> <p> Free Classifieds in Pakistan. © 2006-2020 OLX  </p> </div>
                      
                       
                       
                    




                    </Col>
                </Row>





            </React.Fragment>
        )
    }
}
export default Ffooter;
