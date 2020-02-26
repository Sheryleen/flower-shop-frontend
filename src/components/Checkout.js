import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

class Checkout extends React.Component {
  render() {
    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Checkout</Navbar.Brand>
        <Nav className='mr-auto'></Nav>

        <Navbar>Please Enter Shipping</Navbar>
        <Form inline>
          <FormControl type='text' placeholder='Name' className='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='Address'
            classAddress='mr-sm-2'
          />
          <FormControl type='text' placeholder='City' classCity='mr-sm-2' />
          <FormControl type='text' placeholder='State' classState='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='Zip Code'
            classZip_Code='mr-sm-2'
          />
        </Form>

        <Navbar>Please Enter Billing Address</Navbar>
        <Form inline>
          <FormControl type='text' placeholder='Name' className='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='Address'
            classAddress='mr-sm-2'
          />
          <FormControl type='text' placeholder='City' classCity='mr-sm-2' />
          <FormControl type='text' placeholder='State' classState='mr-sm-2' />
          <FormControl
            type='text'
            placeholder='Zip Code'
            classZip_Code='mr-sm-2'
          />
        </Form>

        <Form inline>
          <Navbar>Please Enter Credit Card</Navbar>
          <FormControl
            type='text'
            placeholder='Name on Card'
            className='mr-sm-2'
          />
          <FormControl
            type='text'
            placeholder='Card_Number'
            classCard_Number='mr-sm-2'
          />
          <FormControl
            type='text'
            placeholder='Exp_Date'
            classExp_Date='mr-sm-2'
          />
          <FormControl type='text' placeholder='CSC' classCSC='mr-sm-2' />
          <Button variant='outline-info'>Submit Order</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Checkout;
