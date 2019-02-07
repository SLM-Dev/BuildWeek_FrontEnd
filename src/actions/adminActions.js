import axios from 'axios';

//Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Get all stories list
export const GET_ALL_STORIES_START = 'GET_ALL_STORIES_START';
export const GET_ALL_STORIES_SUCCESS = 'GET_ALL_STORIES_SUCCESS';
export const GET_ALL_STORIES_FAILURE = 'GET_ALL_STORIES_FAILURE';

//Logout
export const LOGOUT = 'LOGOUT';


const endpoint = 'https://refugeestories.herokuapp.com';


//login
export const login = creds => dispatch => {
	dispatch({type: LOGIN_START, paylaod: creds});
	axios
		.post(`${endpoint}/api/login`, creds)
		.then(response => {
			console.log('Login success', response);
			dispatch({type: LOGIN_SUCCESS, payload: response});
		})
		.catch(err => {
			console.log('Login failed', err);
			dispatch({type: LOGIN_FAILURE, payload: err});
		});
};

//logout
export const logout = () => dispatch => {
	dispatch({type: LOGOUT});
	localStorage.removeItem('jwt');
};

//get all stories
export const getAllStories = () => dispatch => {
	const token = localStorage.getItem('jwt');
	const requestOptions = {
		headers: {
			authorization: token
		}
	};
	dispatch({type: GET_ALL_STORIES_START});
	axios
		.get(`${endpoint}/api/allstories`, requestOptions)
		.then(response => {
			console.log('Get all stories success', response);
			dispatch({type: GET_ALL_STORIES_SUCCESS, payload: response.data});
		})
		.catch(err => {
			console.log('Get all stories failed', err);
			dispatch({type: GET_ALL_STORIES_FAILURE, payload: err});
		});
};
