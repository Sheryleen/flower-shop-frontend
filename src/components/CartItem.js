import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    <div style={{ marginBottom: 15 }}>
      <Card>
        <Row>
          <Col>
            <CardBody>
              <CardTitle>{props.item.name} </CardTitle>
              <CardText>${props.item.price.toFixed(2)}</CardText>
              <CardImg style={{ width: 50 }} src={props.item.picture} />
            </CardBody>
          </Col>
          <Col>
            <Link>
              <Button
                size='sm'
                color='danger'
                onClick={() => props.removeFromCart(props.item.id)}
              >
                Remove
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
