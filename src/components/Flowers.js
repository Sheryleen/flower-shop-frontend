import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import ReactStars from "react-stars";

let flower = " "

const Flowers = props => {
  
  let { id, name, price, picture, rating, onSale } = props.flower;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src={flower.picture}
      />
      <Card.Body>
        <Card.Title>Arrangements</Card.Title>
        {/* <Card.Text>
          
        </Card.Text> */}
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

//The first argument to a mapStateToProps function is the entire Redux store state
// to add data to component props

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    flowers: state.flowers.all
  };
};

export default connect(mapStateToProps)(Flowers);

