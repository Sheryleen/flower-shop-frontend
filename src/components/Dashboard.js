import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import FlowersList from "./FlowersList";
import {
  CardTitle,
  CardImg,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

const Dashboard = props => {
  // console.log("props", props);

  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='3'>
        <container>
          <FlowersList />
          
          
        </container>
      </Col>
    </Row>
  ));

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      {listOfFlowers}
    </Container>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    flowers: state.flowers.all
  };
};

export default connect(mapStateToProps)(Dashboard);
