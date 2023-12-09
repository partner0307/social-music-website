import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem('token');
const user: any = token ? jwtDecode(token) : null;

const _ROUTERS = {
	// auth routes
	_SIGNIN: 'signin/',
	_SIGNUP: 'signup/',

	// submenu routes
	_HOME: '/',
	_PROFILE: '/u/:username',
	_BRACKETS: '/brackets',
	_TOURNAMENT: '/:bracket_url',
	_QUALIFY: 'qualify/',
	_WINNER: 'winner/'
};

export default _ROUTERS;
