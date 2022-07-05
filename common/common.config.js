export const apiBaseUrl = 'http://localhost:18888';
uni.$u.apiBaseUrl = apiBaseUrl;

const install = (app, options) => {
	
	app.config.globalProperties.$u.apiBaseUrl = apiBaseUrl;
	
	
};

export default {install};
