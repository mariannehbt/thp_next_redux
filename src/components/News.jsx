import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// const api = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-25&sortBy=publishedAt&apiKey=3a53a6b240244722b4558136a85bad31';
const api = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

const News = () => {
	const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
	const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
	const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

	const initialState = {
		loading: false,
		news: [],
		error: ""
	};

	const newsReducer = (state = initialState, action) => {
		switch (action.type) {
			case FETCH_NEWS_REQUEST:
			return {
				...state,
				loading: true
			};
			case FETCH_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				news: action.news
			};
			case FETCH_NEWS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error
			};
			default: return state;
		};
	};

	const fetchNewsRequest = () => {
		return {
			type: FETCH_NEWS_REQUEST
		};
	};

	const fetchNewsSuccess = (news) => {
		return {
			type: FETCH_NEWS_SUCCESS,
			news
		};
	};

	const fetchNewsFailure = (error) => {
		return {
			type: FETCH_NEWS_FAILURE,
			error
		};
	};

	const fetchNews = () => {
		return (dispatch) => {
			dispatch(fetchNewsRequest());
			fetch(api)
			.then((response) => response.json())
			.then((response) => {
				if (response.status === "error") {
					dispatch(fetchNewsFailure(response.message));
				} else {
					dispatch(fetchNewsSuccess(response.meals));
				}
			});
		};
	};

	let store = createStore(
		newsReducer,
		compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	);

	store.subscribe(() => console.log(store.getState()));

	store.dispatch(fetchNews());

	return null;
};

export default News;
