import React from 'react';
// import Counter from './Counter';
// import Pantry from './Pantry';
// import News from './News';
import PastasContainer from './PastasContainer';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<div className='app'>
				<PastasContainer />
			</div>
		</Provider>
	);
};

export default App;
