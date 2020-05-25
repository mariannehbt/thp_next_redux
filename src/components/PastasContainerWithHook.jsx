import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPastas } from '../redux';

const PastasContainerWithHook = () => {
	const pastas = useSelector(state => state.pastas);
	const dispatch = useDispatch();
	return (
		<div className='PastasContainerWithHook'>
			<h2>Pantry : { pastas } kg of Pastas</h2>
			<button onClick={() => dispatch(buyPastas())}>Buy Pastas !</button>
		</div>
	);
};

export default PastasContainerWithHook;
