import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem('token');
const user: any = token ? jwtDecode(token) : null;

const _ROUTERS = {
	// auth routes
	_SIGNIN: 'signin/',
	_SIGNUP: 'signup/',
	_SIGNUP_CLIENT: 'client/',
	_SIGNUP_TALENT: 'talent/',
	_VERIFY_ENAIL: 'verify-email/',
	_CATEGORY: 'talent-category/',




	// submenu routes
	_HOME: '/',
	_PROFILE: '/:username'
};

export default _ROUTERS;
