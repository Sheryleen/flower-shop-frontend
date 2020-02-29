import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardTitle, Row, Col, CardImg } from "reactstrap";
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

  return <div>{listOfFlowers}</div>;
};
function mapStateToProps(state, props) {
  return {
    flowers: state.flowers.all
  };
}
export default connect(mapStateToProps, { updateFlower, removeFlower })(
  withRouter(Admin)
);