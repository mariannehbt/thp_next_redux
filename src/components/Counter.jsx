import { createStore } from 'redux';

const Counter = () => {
	const counter = (state = 0, action) => {
		switch(action.type) {
			case 'INCREMENT_ONE':
			return state + 1;
			case 'DECREMENT_ONE':
			return state - 1;
			case 'INCREMENT':
			return state + action.value;
			case 'DECREMENT':
			return state - action.value;
			case 'RESET':
			return state = 0;
			default: return state;
		};
	};

	let store = createStore(counter);

	const incrementOne = () => {
		return {
			type: 'INCREMENT_ONE',
		};
	};

	const decrementOne = () => {
		return {
			type: 'DECREMENT_ONE',
		};
	};

	const increment = (value) => {
		return {
			type: 'INCREMENT',
			value: value
		};
	};

	const decrement = (value) => {
		return {
			type: 'DECREMENT',
			value: value
		};
	};

	const reset = (value) => {
		return {
			type: 'RESET',
			value: value
		};
	};

	store.subscribe(() => console.log(store.getState()));

	store.dispatch(incrementOne());
	store.dispatch(incrementOne());
	store.dispatch(decrementOne());
	store.dispatch(incrementOne());
	store.dispatch(reset());
	store.dispatch(increment(2));
	store.dispatch(increment(4));
	store.dispatch(decrement(1));
	store.dispatch(increment(1));

	return null;
};

export default Counter;