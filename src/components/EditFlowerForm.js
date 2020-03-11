import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateFlower } from "../store/flowers/actions";
import { Link } from "react-router-dom";

// You can access props using the props parameter
const EditFlowerForm = props => {
  //creating state for flowers

  const [flower_id, setFlower] = useState("");
  const [in_cart, setIn_Cart] = useState("");
  const [name, setName] = useState("");
  const [on_sale, setOn_Sale] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    if (props.flower) {
      setName(props.flower.name);
      setOn_Sale(props.flower.on_sale);
      setPrice(props.flower.price);
      setRating(props.flower.rating);
      setPicture(props.flower.picture);
    }
  }, [props.flower]);

  function handleSubmit(e) {
    e.preventDefault();
    props.updateFlower({
      id: props.match.params.id,
      in_cart,
      name,
      picture,
      on_sale,
      price,
      rating
    });
    props.history.push("/admin");
  }
  console.log("props", props);
  if (props.flower) {
    return (
      <Form onSubmit={handleSubmit}>
        {/**when form is submitted a submit event is fired, listening for submit event, on submit intercepts, then handle submit fires */}

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

        <Button color='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  } else {
    return <div>loading...</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    flower: state.flowers.all.find(flower => flower.id == props.match.params.id)
  };
};

export default connect(mapStateToProps, { updateFlower })(EditFlowerForm);
