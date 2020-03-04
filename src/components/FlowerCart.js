import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
//gives access to router props (history,match and location)
import CartItem from "./CartItem";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const FlowerCart = props => {
  let arrOfCartItems = props.flowers.filter(item => item.in_cart);
  let cartItemComponents = arrOfCartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}
      // removeFlowerFromCart={props.removeFlowerFromCart}
    />
  ));
  //reduces the array to a single value
  //return value is stored in an accumulator

  let totalPrice = arrOfCartItems.reduce(
    (acc, cartItem) => (acc += cartItem.price),
    0
  );

  let taxTotal = totalPrice * 0.086;
  let grandTotal = totalPrice + taxTotal;

  return (
    <div>
      <Container>
        <Row>
          <Col className='cart md-6'>
            <Card>
              <CardBody>
                <CardTitle>Your Cart</CardTitle>
                <CardText>{cartItemComponents}</CardText>
                <CardSubtitle>Subtotal: ${totalPrice.toFixed(2)}</CardSubtitle>
                <CardText>Tax: ${taxTotal.toFixed(2)}</CardText>
                <CardText>Total: ${grandTotal.toFixed(2)}</CardText>
                <Link to='/checkout'>
                  <Button color='danger' size='lg'>
                    Checkout
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    flowers: state.flowers.all
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: item => {
      dispatch({
        type: "REMOVE_FROM_CART",
        item
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FlowerCart));
