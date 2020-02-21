import React from "react";
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import { NavLink } from "react-router-dom";

const Login = () => {
  const loggedIn = localStorage.getItem("loggedInUser");
  const loggedInUser = JSON.parse(loggedIn);
  return (
    <ListGroup>
      <NavLink to='/main'>
        <ListGroupItem>Home</ListGroupItem>
      </NavLink>
      <NavLink to={`/profile/${loggedInUser.id}`}>
        <ListGroupItem>Owner</ListGroupItem>
      </NavLink>
      
    </ListGroup>
  );
};

export default Login;
