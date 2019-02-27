import React, { Component } from 'react';
import './Body.css';
import Content from './Content';
import Nav from './Nav';

class Body extends Component {

  onGreet(x){
  	var win=document.getElementById("myframe").contentWindow;
  	if(x==2){
  		win.document.location.href="http://localhost:3000/ac.html"
  	}
  	switch(x) {
  		case 1:
    // code block
      		win.document.location.href="http://localhost:3000/ab.html"

    		break;
  		case 2:
    // code block
    		break;
    		  		win.document.location.href="http://localhost:3000/ac.html"

  		default:
  		    		  		win.document.location.href="http://localhost:3000/ad.html"

    // code block
	}		
 	
  }
render() {
	  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
    return (
      <div className="Body">
       <Nav greet={this.onGreet}/>
       <Content ref="Cont"/>
      </div>
    );
  }
}

export default Body;

