import React from "react";
import { connect } from "react-redux";
import FlowersList from "../components/FlowersList";
import { Row, Col, Container } from "reactstrap";
import FlowerCart from "../components/FlowerCart";
import AddFlowerForm from "../components/AddFlowerForm";


const Main = props => {
  return (
    <Container style={{ display: "flex" }}>
      <FlowersList />
      <FlowerCart />
    </Container>
  );
};

export default Main;
