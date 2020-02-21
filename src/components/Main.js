import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import FlowersList from "./FlowersList";
import { CardTitle, CardImg, CardText, Row, Col, Container } from "reactstrap";

const Main = props => {
  //   // console.log("props", props);


  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <FlowersList/>
    </Container>
  );
};



export default Main;
