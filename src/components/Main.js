import React from "react";
import FlowersList from "../components/FlowersList";
import { Container } from "reactstrap";
import FlowerCart from "../components/FlowerCart";

const Main = props => {
  return (
    <Container style={{ display: "flex" }}>
      <FlowersList />
      <FlowerCart />
    </Container>
  );
};

export default Main;
