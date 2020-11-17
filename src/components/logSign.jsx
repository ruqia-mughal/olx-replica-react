import React, { Component } from 'react'
import { Nav, Navbar, FormControl, Form, Button, Modal } from 'react-bootstrap';
export default class LogSign extends Component {
    render() {
     
            return (
        


                  

                            <div className="login_signup">
                                <div className="heading">
                                    <h3> Login-SignUp</h3>
                                    <hr className="horizontal_row_1" />

                                </div>
                                <div className="facebook">
                                    <a className="log_sign" href="#login">  Login with facebook</a>

                                </div>
                                <hr className="horizontal_row" />
                                <div className="mail">
                                    <a className="log_sign" href="#gmail"> Login with Gmail</a>

                                </div>

                            </div>
                  
            );
        }

       

    }

