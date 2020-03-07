import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  Container,
  ButtonGroup,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";
//gives access to router props (history,match and location)
import { removeFlower } from "../store/flowers/actions";
import { updateFlower } from "../store/flowers/actions";

const Admin = props => {
  let listOfFlowers = props.flowers.map(flower => (
    <Col sm='4'>
      <Card body style={{ marginBottom: "15px" }}>
        <CardImg className='card-size' variant='top' src={flower.picture} />

        <CardTitle>
          <p>{flower.name}</p>
          <p>${flower.price}</p>
        </CardTitle>
        <Col>
          <Link to={`/admin/edit/${flower.id}`}>
            <Button className='btn-spacing' color='warning' size='sm'>
              Edit
            </Button>
          </Link>
          <Link>
            <Button
              color='danger'
              size='sm'
              onClick={() => props.removeFlower(flower.id)}
            >
              Delete
            </Button>
          </Link>
        </Col>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Link to={`/admin/add/`}>
        <Button style={{ marginBottom: "8px" }} color='secondary'>
          Add Flowers
        </Button>
        <ButtonGroup size='md' className='mt-3'></ButtonGroup>
      </Link>
      <Row>{listOfFlowers}</Row>
    </div>
  );
};
function mapStateToProps(state, props) {
  return {
    flowers: state.flowers.all
  };
}
export default connect(mapStateToProps, { updateFlower, removeFlower })(
  withRouter(Admin)
);
