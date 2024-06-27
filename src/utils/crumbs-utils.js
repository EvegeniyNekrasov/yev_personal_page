export const getReflexionCrumbs = (lang) => {
	return [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Reflexiones',
			url: `/reflexiones/${lang}`
		}
	];
};
