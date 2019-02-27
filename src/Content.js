import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
componentDidMount() {
   console.log(this);
  }
render() {
    return (
      <div className="Content">
      <iframe className="Content-Frame" sandbox="allow-scripts allow-same-origin" id="myframe" src="http://localhost:3000/ab.html" ref = {c => this.myFrame = c} />
      </div>
    );
  }
}

export default Content;

