const initialState = {
	flights: [],
};

const searchReducer = (state = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_FLIGHTS':
			return {
				...state,
				flights: payload.flights,
			};

		default:
			return state;
	}
};

export default searchReducer;
