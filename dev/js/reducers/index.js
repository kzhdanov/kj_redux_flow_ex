import {combineReducers} from 'redux';
import CarsReducer from './reducer-cars';
import CarsFilterReducer from './reducer-filter-cars';

const allRedusers = combineReducers({
	cars: CarsReducer,
	filterCars: CarsFilterReducer,
})

export default allRedusers;
