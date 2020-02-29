import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addFlower } from "../store/flowers/actions";

// You can access props using the props parameter
const AddFlowerForm = props => {
  //creating state for flowers
  const [flower_id, setFlower] = useState("1");
  const [in_cart, setIn_Cart] = useState("");
  const [name, setName] = useState("");
  const [on_sale, setOn_Sale] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [picture, setPicture] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addFlower({
      in_cart,
      name,
      picture,
      on_sale,
      price,
      rating
    },props.history.push);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/**when form is submitted a submit event is fired, listing for submit event, on submit intercepts, then handle submit fires */}

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
        <Label>Price</Label>
        <Input
          type='text'
          name='price'
          id='price'
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
      </FormGroup>
      <FormGroup>
        <Label for='picture'>Picture</Label>
        <Input
          type='text'
          name='picture'
          id='picture'
          onChange={e => setPicture(e.target.value)}
          value={picture}
        />
      </FormGroup>
      <FormGroup>
        <Label for='on_sale'>On Sale</Label>
        <Input
          type='text'
          name='on_sale'
          id='on_sale'
          onChange={e => setOn_Sale(e.target.value)}
          value={on_sale}
        />
      </FormGroup>
      <FormGroup>
        <Label for='rating'>Rating</Label>
        <Input
          type='text'
          name='rating'
          id='rating'
          onChange={e => setRating(e.target.value)}
          value={rating}
        />
      </FormGroup>
      <Button color="primary" type='submit'>Submit</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    flowers: state.flowers.all
  };
};

export default connect(mapStateToProps, { addFlower })(AddFlowerForm);
