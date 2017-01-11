import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
	render() {
	    return (
	      <div>
	      	{this.props.cars.model}
	      </div>
	    );
	}
}

export default connect(
	(state, ownProps) => ({
		cars: state.cars.find(car => car.id === Number(ownProps.params.id)),
		ownProps
	}))(Detail)