import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Cards from "./cards.jsx";
import  avatar from "../images/avatar.png"
class Main extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {

                    title: "FEATURED",
                    name: "Juicer",
                    description: "Juicer machine in cheapest price",
                    price: " Rs:400",
                    location: "I-10 ,Islamabad",
                    time: "34 mint ago",
                   

                },
                {
                    title: "New",
                    name: "Watch",
                    description: "Latest watch for Mens,boys ,elegent design",
                    price: " Rs:1100",
                    location: "karachi",
                    time: "1 mint ago",
                   
                }, {
                    title: "FEATURED",
                    name: "Coaster",
                    description: "Toyota coaster,used one year only",
                    price: " Rs:34,000",
                    location: "Multan",
                    time: "1 week ago",
                    url:"https://www.google.com/search?q=images+png&rlz=1C1CHBD_enPK863PK863&sxsrf=ALeKk01ndsvjV4oJa8ZJc7j1WuBz_uS4-w:1604037529258&tbm=isch&source=iu&ictx=1&fir=heZYjcMjM18sFM%252CkWyWSWxiwfirvM%252C_&vet=1&usg=AI4_-kQlmxzi0XodnugtAA6ipAXdl-66QA&sa=X&ved=2ahUKEwj-24y50dvsAhVKThUIHS8zCVwQ9QF6BAgREHI#imgrc=heZYjcMjM18sFM"


                }, {
                    title: "LATEST",
                    name: "Mobile",
                    description: "Q mobile M350 minimun price for sale",
                    price: " Rs:7000",
                    location: "Machine Mohallah jhelum",
                    time: " 55 sec ago",
                    url:"https://www.google.com/search?q=images+png&rlz=1C1CHBD_enPK863PK863&sxsrf=ALeKk01ndsvjV4oJa8ZJc7j1WuBz_uS4-w:1604037529258&tbm=isch&source=iu&ictx=1&fir=heZYjcMjM18sFM%252CkWyWSWxiwfirvM%252C_&vet=1&usg=AI4_-kQlmxzi0XodnugtAA6ipAXdl-66QA&sa=X&ved=2ahUKEwj-24y50dvsAhVKThUIHS8zCVwQ9QF6BAgREHI#imgrc=heZYjcMjM18sFM"


                },
                {
                    title: "FEATURED",
                    name: "Braclets",
                    description: "Braclets made of beautiful stones",
                    price: " Rs:670",
                    location: "Dina,punjab pakistan",
                    time: "47 mint ago",
                   

                },
                {
                    title: "FEATURED",
                    name: "Tablets",
                    description: "Tablets at minimum rate",
                    price: " Rs:5400",
                    location: "faisalabad",
                    time: " 55 weeks ago",
                   


                }, {
                    title: "FEATURED",
                    name: "Bed sheets ",
                    description: "Bed sheets ,beautiful color ,elegent design",
                    price: " Rs:990 only",
                    location: "karachi",
                    time: "34 hours ago",
                    url:"https://pngtree.com/freepng/bule-border_3551748.html"


                },
            
                {
                    title: "Latest",
                    name: "water cooler ",
                    description: "water coolers imported from afghanistan",
                    price: " Rs:500",
                    location: "jhelum punjab pakistan",
                    time: "4 mint ago",
                


                },
            ]
        }
    }

    render() {

        let cards = this.state.products.map((pro) => {
            return (
                <Col xs="6" sm="6" md="3" lg="3" xl="3" >
                    <Cards products={pro} />
                </Col>
            )
        })
        return (
            <Container >
                <div className="row_card">
                    <Row className="h1_row">
                        <h1>Based On Your Latest Search</h1>
                   
                    </Row>
                    <Row>
              
                         {cards}
                   
                    </Row>
                </div>
                <div className="row2_card">
                    <Row className="h1_row">
                        <h1>Fresh recomendation</h1>
                        
                  
                     
                    </Row>
                    <Row >
                        {cards}
                    </Row>
                </div>
                <div className="load_more">
                <button>Load more</button>
            </div>
            </Container>
           
        )
    }
}



export default Main;