import React from "react";
import { Navbar, Nav, Form, Button, FormControl, Modal } from "react-bootstrap";

class Checkout extends React.Component {
  render() {
    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Checkout</Navbar.Brand>
        <Nav className='mr-auto'></Nav>

        <Navbar>Please Enter Shipping Address</Navbar>
        <Form inline>
          <FormControl type='text' placeholder='name' className='mr-sm-6' />
          <FormControl
            type='text'
            placeholder='address'
            classAddress='mr-sm-6'
          />
          <FormControl type='text' placeholder='city' classCity='mr-sm-4' />
          <FormControl type='text' placeholder='state' classState='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='zip code'
            classZip_Code='mr-sm-5'
          />
        </Form>

        <Navbar>Please Enter Billing Address</Navbar>
        <Form inline>
          <FormControl type='text' placeholder='name' className='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='address'
            classAddress='mr-sm-2'
          />
          <FormControl type='text' placeholder='city' classCity='mr-sm-2' />
          <FormControl type='text' placeholder='state' classState='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='zip code'
            classZip_Code='mr-sm-2'
          />
        </Form>

        <Form inline>
          <Navbar>Please Enter Credit Card</Navbar>
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
        <Button variant='outline-info' >Submit Order</Button>
        <Modal.Body Order Has Been Submitted>
          
        </Modal.Body>

      </Navbar>
    );
  }
}

export default Checkout;
