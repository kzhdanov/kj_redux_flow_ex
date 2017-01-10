import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

class App extends Component {
	addCar() {
		this.props.onAddCar(this.carModel.value);
      	this.carModel.value = '';
	}

	findCar() {
		this.props.onFilterCars(this.searchInput.value);
  	}

	render() {
	    return (
	      <div>
	      	<Menu />
	      	<div>
	      		<input type="text" ref={(input) => { this.carModel = input }}/>
	      		<button onClick={this.addCar.bind(this)}>Add car</button>
	      	</div>

	      	<div>
	          <input type="text" ref={(input) => { this.searchInput = input }} />
	          <button onClick={this.findCar.bind(this)}>Find car by cars name</button>
        	</div>
	      	
	      	<ul>
	      		{ this.props.cars.map( (car, index) => 
	      			<li key={index}>{car.model}</li>	
	      		)}
	      	</ul>

	      </div>
	    );
	}
}

export default connect(
	state => ({
		cars: state.cars.filter(car => car.model.includes(state.filterCars))
	}),

	dispatch => ({
		onAddCar: (model) => {
	    const payload = {
	      id: Date.now().toString(),
	      model
	    };	
      	dispatch({ type: 'ADD_CAR', payload });
      },

      onFilterCars: (model) => {
      	 dispatch({ type: 'FIND_CAR', payload: model});
      }
	})
)(App);
