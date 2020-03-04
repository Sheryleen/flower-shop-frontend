import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Button
} from "reactstrap";
import { removeFromCart } from "../store/flowers/actions";

let id = " ";

const CartItem = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardBody>
              <CardTitle>{props.item.name} </CardTitle>
              <CardText>${props.item.price.toFixed(2)}</CardText>
              <CardImg className='img' src={props.item.picture} />
            </CardBody>
          </Col>
          <Col>
            <Button
              color='danger'
              onClick={() => props.removeFromCart(props.item.id)}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
