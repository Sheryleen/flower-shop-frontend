import React from "react";
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
            <Button color='danger' onClick={() => props.removeFromCart}>
              Remove
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default CartItem;
