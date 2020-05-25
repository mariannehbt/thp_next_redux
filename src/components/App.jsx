import React from 'react';
// import Counter from './Counter';
// import Pantry from './Pantry';
// import News from './News';
// import PastasContainer from './PastasContainer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PastasContainerWithHook from './PastasContainerWithHook';

const App = () => {
	return (
		<Provider store={store}>
			<div className='app'>
				<PastasContainerWithHook />
			</div>
		</Provider>
	);
};

export default App;
