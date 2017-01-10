const initialState = '';

export default function filterCars(state = initialState, action) {
  if (action.type === 'FIND_CAR') {
    return action.payload;
  }
  return state;
}