const TOKEN_KEY = 'notifiedjwt';

export const login = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
	if (localStorage.getItem(TOKEN_KEY)) {
		return true;
	}
	return false;
};

export const getToken = () => {
	let token = localStorage.getItem(TOKEN_KEY);
	return token;
};

