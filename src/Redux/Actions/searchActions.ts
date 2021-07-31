import axios from 'axios';

const getFlights = () => {
	return async (dispatch: any) => {
		const { data } = await axios.get('https://run.mocky.io/v3/8e3028d8-53dd-4393-aad3-a0e17064fda7');

		dispatch({
			type: 'SET_FLIGHTS',
			payload: {
				flights: data,
			},
		});
	};
};

// const getFlights = () => {
// 	const data = axios.get('https://run.mocky.io/v3/8e3028d8-53dd-4393-aad3-a0e17064fda7');
// 	return (dispatch: any) => {
// 		return dispatch({
// 			type: 'SET_FLIGHTS',
// 			payload: data,
// 		});
// 	};
// };

export { getFlights };
