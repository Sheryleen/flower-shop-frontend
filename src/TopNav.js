import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const TopNav = props => {
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>My Little Flower Shop</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default TopNav;
