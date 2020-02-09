import React from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

const Dashboard = props => {
  // console.log("props", props);

  let listOfFlowers = props.flowers.map(flower => (
    <Row>
      <Col sm='3'>
        <Card body>
          <CardTitle>{flower.name}</CardTitle>
          <Button
            onClick={() =>
              props.history.push(`/flower/${flower.id}/flowers`)
            }
          >
            View Flowers
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      {listOfFlowers}
    </Container>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    flowers: state.flowers.all
  };
};

export default connect(mapStateToProps)(Dashboard);
