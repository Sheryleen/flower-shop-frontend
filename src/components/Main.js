import React from "react";
import FlowersList from "../components/FlowersList";
import { Container, Col } from "reactstrap";
import FlowerCart from "../components/FlowerCart";

const Main = props => {
  return (
    <Container style={{ display: "flex" }}>
      <Col sm='9'>
        <FlowersList />
      </Col>
      <Col sm='3'>
        <FlowerCart />
      </Col>
    </Container>
  );
};

export default Main;
