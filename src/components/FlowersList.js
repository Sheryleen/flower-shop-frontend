import React, { Component } from "react";
import Flower from "./Flower";
import { connect } from "react-redux";
import { Button, Card, CardTitle, Row, Col, CardImg } from "reactstrap";

const FlowersList = props => {
  // console.log("FLOWERS: ", props.listOFFlowers);

  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='6'>
        <Card body>
          <CardImg variant='top' src={flower.picture} />
          <CardTitle>
            {flower.name} ${flower.price}
          </CardTitle>
          <Button onClick={() => props.history.push(`/flowers/${flower.id}`)}>
            Add to Cart
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  // console.log("FLOWERS-LIST: ", listOfFlowers);

  return <div>{listOfFlowers}</div>;
};
function mapStateToProps(state, props) {
  return {
    flowers: state.flowers.all
  };
}
export default connect(mapStateToProps)(FlowersList);
