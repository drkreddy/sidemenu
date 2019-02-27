import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Test from './Test';
import Body from './Body';
import Header from'./Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Body/>
     </div>
    );
  }
}

export default App;
