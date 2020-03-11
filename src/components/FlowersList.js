import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    <Col sm='6'>
      <Card body className='background' style={{ marginBottom: "15px" }}>
        <CardImg className='card-size' variant='top' src={flower.picture} />
        <CardTitle>
          <p>{flower.name} </p>
          <p>${flower.price}</p>
        </CardTitle>
        <p className='sale'>{flower.on_sale && "Sale"}</p>
        <CardText>
          <ReactStars edit={false} count={5} value={flower.rating} />
        </CardText>
        <Link>
          <Button
            className='btn-bottom'
            size='sm'
            color='primary'
            onClick={() => props.addToCart(flower.id)}
          >
            Add to Cart
          </Button>
        </Link>
      </Card>
    </Col>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{listOfFlowers}</div>
  );
};
function mapStateToProps(state, props) {
  return {
    flowers: state.flowers.all
  };
}
export default connect(mapStateToProps, { addToCart, removeFlower })(
  withRouter(FlowersList)
);
