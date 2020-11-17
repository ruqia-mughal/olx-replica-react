import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button, DropdownButton, NavDropdown, Dropdown } from 'react-bootstrap';
import olx from "../images/olxx.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <React.Fragment>

                <Row className="row_main">
                    <Col xl="1" lg="1" md="1" sm="12" xs="12"> </Col>

                    <Col xl="9" lg="9" md="10" sm="12" xs="12" className="column_main"  >

                        <Navbar fixed="top" className="navbar " >

                            <Navbar.Brand href="#home" xl="3" lg="3" md="3" sm="3" xs="3" className="brand ">
                                <div className="logo"> <img src={olx} alt="olx logo" /></div>
                            </Navbar.Brand>
                            <div className="location" xl="4" lg="4" md="4" sm="4" xs="4">

                                <Dropdown>
                                    <Dropdown.Toggle className="dropdown_1" >
                                        <FontAwesomeIcon icon="search" className="srch" /> <h5>  Pakistan   </h5>
                                        <FontAwesomeIcon icon="chevron-down" className="chevron" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className="currentlocation">
                                            <h6> <FontAwesomeIcon icon="location-arrow" />Use Current Location</h6>
                                            <p>Maqboolabad society,karachi</p></Dropdown.Item>
                                        <hr />
                                        <Dropdown.Header>Recent location</Dropdown.Header>
                                        <Dropdown.Item href="#"><FontAwesomeIcon icon="search-location" /> Pakistan</Dropdown.Item>
                                        <hr />
                                        <Dropdown.Header>popular location</Dropdown.Header>
                                        <Dropdown.Item href="#"><FontAwesomeIcon icon="map-marker" /> Punjab</Dropdown.Item>
                                        <Dropdown.Item href="#"> <FontAwesomeIcon icon="map-marker" />Islamabad capital Territory</Dropdown.Item>
                                        <Dropdown.Item href="#"> <FontAwesomeIcon icon="map-marker" />Sindh</Dropdown.Item>
                                        <Dropdown.Item href="#"><FontAwesomeIcon icon="map-marker" />Khyber Pakhtunkhwa</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>


                            </div>

                            <div className="search_bar " xl="3" lg="3" md="3" sm="3" xs="3">

                                <Form >
                                    <FormControl type="text" placeholder="Find Cars,Mobile Phones and more..." className="form_control" />
                                    <button className="search-btn"><FontAwesomeIcon icon="search" className="srch_bar" /></button>
                                </Form>


                            </div>
                            <div className=" login " xl="1" lg="1" md="1" sm="1" xs="1">

                                <a href="/logSign.jsx" className="login_0">Login </a>

                            </div>
                            <div className="btn_sell" xl="1" lg="1" md="1" sm="1" xs="1">

                                <button href="#signup" className="sell_btn" > <FontAwesomeIcon icon="plus" />  SELL</button>
                            </div>


                        </Navbar>


                    </Col>
                    <Col xl="2" lg="2" md="1" sm="12" xs="12"></Col>
                </Row>


                <Navbar className="navbar-own " >
                    <Row className="white_pure" >
                        <Col xl="1" lg="1" md="1" sm="0" xs="0" >

                        </Col>
                        <Col className="col_cata" xl="2" lg="2" md="2" sm="3" xs="3" >

                            <Dropdown className="dropdown_2  " >

                                <Dropdown.Toggle className="dropdown_2Toggle" >
                                    <h5>  ALL CATAGORIES  <FontAwesomeIcon className="chevron_1" icon="chevron-down" /></h5>
                                </Dropdown.Toggle>


                                <Dropdown.Menu className="flex row" >
                                    <div className="dropdown_menu " xl="3" lg="3" md="3" sm="3" xs="3">
                                    <Dropdown.Header className="header_menu">Vehicles</Dropdown.Header>
                                    <Dropdown.Item href="#"> Tractors</Dropdown.Item>
                                    <Dropdown.Item href="#">    Buses</Dropdown.Item>
                                    <Dropdown.Item href="#"> Vans</Dropdown.Item>
                                    <Dropdown.Item href="#"> Rikshaws</Dropdown.Item>
                                    <Dropdown.Item href="#"> Cars</Dropdown.Item>


                                    <Dropdown.Header className="header_menu"> Fashion & Beauty</Dropdown.Header>
                                    <Dropdown.Item href="#">  Other Fashion</Dropdown.Item>
                                    <Dropdown.Item href="#">Lawn & Pret</Dropdown.Item>
                                    <Dropdown.Item href="#"> Wedding</Dropdown.Item>
                                    {/* <Dropdown.Item href="#"> Watches</Dropdown.Item>
                                    <Dropdown.Item href="#">Accessories </Dropdown.Item>
                                    <Dropdown.Item href="#">Clothes </Dropdown.Item>
                                    <Dropdown.Item href="#">Footwear </Dropdown.Item>
                                    <Dropdown.Item href="#">Skin & Hair </Dropdown.Item> */}
                                    <Dropdown.Item href="#">Make Up</Dropdown.Item>
                                    <Dropdown.Item href="#">Jewellery </Dropdown.Item>

                                    <Dropdown.Header className="header_menu"> Services</Dropdown.Header>
                                    <Dropdown.Item href="#">  Farm & Fresh Food</Dropdown.Item>
                                    <Dropdown.Item href="#">Home & Office Repair</Dropdown.Item>
                                    <Dropdown.Item href="#"> Event Services</Dropdown.Item>
                                    <Dropdown.Item href="#"> Education & Classes</Dropdown.Item>
                                    <Dropdown.Item href="#">Web Development </Dropdown.Item>
                                    {/* <Dropdown.Item href="#">Drivers & Taxi </Dropdown.Item>
                                    <Dropdown.Item href="#">Travel & Visa </Dropdown.Item>
                                    <Dropdown.Item href="#">Electronics & Computer Repair </Dropdown.Item> */}
                                    <Dropdown.Item href="#"> Health & Beauty</Dropdown.Item>
                                    <Dropdown.Item href="#">Catering & Restaurant </Dropdown.Item>
                                    </div>
                               
                                    {/* <div className="dropdown_menu " xl="3" lg="3" md="3" sm="3" xs="3">
                                    <Dropdown.Header className="header_menu">Vehicles</Dropdown.Header>
                                    <Dropdown.Item href="#"> Tractors</Dropdown.Item>
                                    <Dropdown.Item href="#">    Buses</Dropdown.Item>
                                    <Dropdown.Item href="#"> Vans</Dropdown.Item>
                                    <Dropdown.Item href="#"> Rikshaws</Dropdown.Item>
                                    <Dropdown.Item href="#"> Cars</Dropdown.Item>


                                    <Dropdown.Header className="header_menu"> Fashion & Beauty</Dropdown.Header>
                                    <Dropdown.Item href="#">  Other Fashion</Dropdown.Item>
                                    <Dropdown.Item href="#">Lawn & Pret</Dropdown.Item>
                                    <Dropdown.Item href="#"> Wedding</Dropdown.Item>
                                    <Dropdown.Item href="#"> Watches</Dropdown.Item>
                                    <Dropdown.Item href="#">Accessories </Dropdown.Item>
                                    <Dropdown.Item href="#">Clothes </Dropdown.Item>
                                    <Dropdown.Item href="#">Footwear </Dropdown.Item>
                                    <Dropdown.Item href="#">Skin & Hair </Dropdown.Item>
                                    <Dropdown.Item href="#">Make Up</Dropdown.Item>
                                    <Dropdown.Item href="#">Jewellery </Dropdown.Item>

                                    <Dropdown.Header className="header_menu"> Services</Dropdown.Header>
                                    <Dropdown.Item href="#">  Farm & Fresh Food</Dropdown.Item>
                                    <Dropdown.Item href="#">Home & Office Repair</Dropdown.Item>
                                    <Dropdown.Item href="#"> Event Services</Dropdown.Item>
                                    <Dropdown.Item href="#"> Education & Classes</Dropdown.Item>
                                    <Dropdown.Item href="#">Web Development </Dropdown.Item>
                                    <Dropdown.Item href="#">Drivers & Taxi </Dropdown.Item>
                                    <Dropdown.Item href="#">Travel & Visa </Dropdown.Item>
                                    <Dropdown.Item href="#">Electronics & Computer Repair </Dropdown.Item>
                                    <Dropdown.Item href="#"> Health & Beauty</Dropdown.Item>
                                    <Dropdown.Item href="#">Catering & Restaurant </Dropdown.Item>
                                    </div>
                                */}
                                </Dropdown.Menu>

                              
                            </Dropdown>



                        </Col>

                        <Col className="col_menu" xl="8" lg="8" md="8" sm="9" xs="9">
                            <Nav className="one_line_nav" >
                                <Nav.Link href="#"> Mobile Phones</Nav.Link>
                                <Nav.Link href="#" >Cars & Motorcycles</Nav.Link>
                                <Nav.Link href="#" >Houses </Nav.Link>
                                <Nav.Link href="#" >TV-Video-Audio  </Nav.Link>
                                <Nav.Link href="#" >Tablets  </Nav.Link>
                                <Nav.Link href="#">Land & Plot</Nav.Link>

                            </Nav>

                        </Col>
                        <Col className="" xl="1" lg="1" md="1" sm="0" xs="0" ></Col>
                    </Row>
                </Navbar>





            </React.Fragment>
        )
    }
}
export default Header;
