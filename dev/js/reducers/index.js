import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import CarsReducer from './reducer-cars';
import CarsFilterReducer from './reducer-filter-cars';


const allRedusers = combineReducers({
	routing: routerReducer,
	cars: CarsReducer,
	filterCars: CarsFilterReducer,
})

export default allRedusers;
