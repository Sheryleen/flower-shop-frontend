import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardText
} from "reactstrap";
import { withRouter } from "react-router-dom";
//gives access to router props (history,match and location)
import { addToCart } from "../store/flowers/actions";
import { removeFlower } from "../store/flowers/actions";
import ReactStars from "react-stars";

let onSale = " ";
let rating = " ";

const FlowersList = props => {
  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='4'>
        <Card body className='background'>
          <CardImg variant='top' src={flower.picture} />
          <CardTitle>
            {flower.name} ${flower.price}
          </CardTitle>
          <p className='sale'>{flower.on_sale && "Sale"}</p>
          <CardText>
            <ReactStars edit={false} count={5} value={flower.rating} />
          </CardText>
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
