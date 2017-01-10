const initialState = [
	{
		model:"Chevrolet Lanos",
	},
	{
		model:"Volga 2110",
	},
	{
		model:"Audi Q6",
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