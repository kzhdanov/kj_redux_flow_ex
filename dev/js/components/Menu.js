import React, { Component } from 'react';
import { Link } from 'react-router'; 

class Menu extends Component {
	render() {
	    return (
	      <div>
	      	<Link to='/'>Cars</Link>
	      	<Link to='/about'>About</Link>
	      </div>
	    );
	}
}

export default Menu;