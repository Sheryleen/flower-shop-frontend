import React, { useEffect } from "react"; //use effect 90% of lifecycle methods built into one;
import { connect } from "react-redux";
import TopNav from "./TopNav";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FlowersList from "./components/FlowersList";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import { fetchAllFlowers } from "./store/flowers/actions";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//useEffect requires 2 arguments
//1st argument should be a/k/a componentDidMount
function App(props) {
  useEffect(() => {
    props.fetchAllFlowers();
  }, []);

  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/flower/:id/flowers' component={FlowersList} />
                <Route path='/flowers/:id/edit' component={CartItem} />
                <Route path='/flowers/:id' component={Cart} />>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { fetchAllFlowers })(App);
