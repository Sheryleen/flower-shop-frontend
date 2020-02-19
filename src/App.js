import React, { useEffect } from "react"; //use effect 90% of lifecycle methods built into one;
import { connect } from "react-redux";
import TopNav from "./TopNav";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import FlowersList from "./components/FlowersList";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import { fetchAllFlowers } from "./store/flowers/actions";
import axios from "axios";
import "./App.css";
import Checkout from "./components/Checkout";
import AddFlowerForm from "./components/AddFlowerForm";
import EditFlowerForm from "./components/EditFlowerForm";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


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
                <Route exact path='/' component={Main} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/admin/add' component={AddFlowerForm} />
                <Route path='/admin/edit/:id' component={EditFlowerForm} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { fetchAllFlowers })(App);
