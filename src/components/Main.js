import React from "react";
import { connect } from "react-redux";
import FlowersList from "./FlowersList";
import { Row, Col, Container } from "reactstrap";
import { Basket } from "../components/Basket";

const Main = props => {
 


  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <FlowersList />
   
  
      <Row>
        <Col sm='3'>
          className="col-md-4">
          </Col>
        <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
      </Row>
    </Container>
   
  );
}

  export default Main;
