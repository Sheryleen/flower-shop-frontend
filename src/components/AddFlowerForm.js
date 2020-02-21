import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { addFlower } from "../store/flowers/actions";

// You can access props using the props parameter
const AddFlowerForm = props => {
  //creating state for products
  const [flower_id, setFlower] = useState("1");
  const [in_cart, setIn_Cart] = useState("");
  const [name, setName] = useState("");
  const [on_sale, setOn_Sale] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addFlower({
      flower_id,
      in_cart,
      name,
      on_sale,
      description,
      price,
      rating
    });
  }

  let listOfFlowers = props.flowers.map(flower => (
    <option value={flower.id}>{flower.name}</option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='flower'>Flower</Label>
        <Input
          type='select'
          name='flower'
          onChange={e => setFlower(e.target.value)}
          value={flower_id}
        >
          {listOfFlowers}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input
          type='text'
          name='name'
          id='name'
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          type='text'
          name='description'
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </FormGroup>
      <FormGroup>
        <Label>Price</Label>
        <Input
          type='text'
          name='price'
          id='price'
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    flowers: state.products.all
  };
};

export default connect(mapStateToProps, { addFlower })(AddFlowerForm);
