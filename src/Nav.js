import React, { Component } from 'react';
import logo from './logo.svg';
import './Nav.css';
import { Tab,ListGroup,Row,Col } from 'react-bootstrap';
class Nav extends Component {


render() {


    return (
     <ListGroup className="Nav">
    <ListGroup.Item action onClick={() => this.props.greet(1)}>
      Home
    </ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(2)}>
      Pending
    </ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(3)}>Partner Services</ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(4)}>Manage Users</ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(5)}>Settings</ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(6)}>File Upload</ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(7)}>Chat Banking</ListGroup.Item>
    <ListGroup.Item action onClick={() => this.props.greet(8)}>Service Settings</ListGroup.Item>

  </ListGroup>
    );
  }
}

export default Nav;

