import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  ButtonGroup,
  CardBody
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";
//gives access to router props (history,match and location)
import { addFlower } from "../store/flowers/actions";
import { removeFlower } from "../store/flowers/actions";
import { updateFlower } from "../store/flowers/actions";

const Admin = props => {
  console.log("PROP: ", props);

  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='3'>
        <Card body>
          <CardImg variant='top' src={flower.picture} />

          <CardTitle>
            {flower.name} ${flower.price}
          </CardTitle>
          <Link to={`/admin/edit/${flower.id}`}>
            <Button color='warning' size='sm'>
              Edit
            </Button>
          </Link>

          <Button
            color='danger'
            size='sm'
            onClick={() => props.removeFlower(flower.id)}
          >
            Delete
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  return (
    <div style={{ display: "flex" }}>
      <div>{listOfFlowers}</div>
      <CardBody>
        <Link to={`/admin/add/`}>
          <Button color='secondary'>Add Flowers</Button>
          <ButtonGroup size='md' className='mt-3'></ButtonGroup>
        </Link>
      </CardBody>
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
