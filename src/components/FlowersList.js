import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardTitle, Row, Col, CardImg } from "reactstrap";
import { withRouter } from "react-router-dom";
//gives access to router props (history,match and location)
import { addToCart } from "../store/flowers/actions";
import { removeFlower } from "../store/flowers/actions";
import { Link } from "react-router-dom";

const FlowersList = props => {
  console.log("PROP: ", props);

  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='4'>
        <Card body>
          <CardImg variant='top' src={flower.picture} />
          <CardTitle>
            {flower.name} ${flower.price}
          </CardTitle>
          <Button color='primary' onClick={() => props.addToCart(flower.id)}>
            Add to Cart
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  return <div>{listOfFlowers}</div>;
};
function mapStateToProps(state, props) {
  return {
    flowers: state.flowers.all
  };
}
export default connect(mapStateToProps, { addToCart, removeFlower })(
  withRouter(FlowersList)
);
