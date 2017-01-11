const initialState = [
	{
		id: 1,
		model:"Chevrolet Lanos",
	},
	{
		id: 2,
		model:"Volga 2110",
	},
	{
		id: 3,
		model:"Audi Q6",
	},
	{
		id: 4,
		model:"Volvo s60",
	}
];

export default function cars (state = initialState, action) {
	if (action.type === 'ADD_CAR') {
	    return [
	      ...state,
	      action.payload
	    ];
  	}

  	return state; 
}