import { connect } from 'react-redux';

import Search from './Search';
import { getFlights } from '../../Redux/Actions/searchActions';

const mapStateToProps = (state: any) => {
	const { searchReducer } = state;
	return {
		...searchReducer,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	getFlights: () => dispatch(getFlights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
