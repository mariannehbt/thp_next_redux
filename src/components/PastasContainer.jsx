import React from 'react';
import { buyPastas } from '../redux';
import { connect } from 'react-redux';

const PastasContainer = (props) => {
	return (
		<div className='PastasContainer'>
			<h2>Pantry : { props.pastas } kg of Pastas</h2>
			<button onClick={ props.buyPastas }>Buy Pastas !</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pastas: state.pastas
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyPastas: () => (dispatch(buyPastas()))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PastasContainer);
