import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormControl, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeAllFromCart } from "../store/flowers/actions";

const ModalCheckout = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function handleClose() {
    //remove items from cart after order is submitted
    //redirect back to main page
    props.removeAllFromCart()
    props.history.push("/")
  }

  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>Checkout</Navbar.Brand>
      <Nav className='mr-auto'></Nav>

      <Navbar>Shipping Address</Navbar>
      <Form inline>
        <FormControl type='text' placeholder='name' className='mr-sm-6' />
        <FormControl type='text' placeholder='address' classAddress='mr-sm-6' />
        <FormControl type='text' placeholder='city' classCity='mr-sm-4' />
        <FormControl type='text' placeholder='state' classState='mr-sm-2' />
        <FormControl
          type='text'
          placeholder='zip code'
          classZip_Code='mr-sm-5'
        />
      </Form>

      <Navbar>Billing Address</Navbar>
      <Form inline>
        <FormControl type='text' placeholder='name' className='mr-sm-2' />
        <FormControl type='text' placeholder='address' classAddress='mr-sm-2' />
        <FormControl type='text' placeholder='city' classCity='mr-sm-2' />
        <FormControl type='text' placeholder='state' classState='mr-sm-2' />
        <FormControl
          type='text'
          placeholder='zip code'
          classZip_Code='mr-sm-2'
        />
      </Form>

      <Form inline>
        <Navbar>Credit Card</Navbar>
        <FormControl type='text' placeholder='name' className='mr-sm-2' />
        <FormControl
          type='text'
          placeholder='card number'
          classCard_Number='mr-sm-2'
        />
        <FormControl
          type='text'
          placeholder='exp date'
          classExp_Date='mr-sm-2'
        />
        <FormControl type='text' placeholder='csc' classCSC='mr-sm-2' />
      </Form>

      <Button color='primary' size='sm' onClick={toggle}>
        Place Order
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thank you</ModalHeader>
        <ModalBody>Your Order Has Been Received</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Navbar>
  );
};

export default connect(null, { removeAllFromCart })(ModalCheckout);
