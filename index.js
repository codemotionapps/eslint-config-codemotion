module.exports = {
	env: {
		es6: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
			jsx: true,
		},
	},
	plugins: ['react', 'standard'],
	rules: Object.assign(
		{},
		require('./rules/errors'),
		require('./rules/bestPractices'),
		require('./rules/variables'),
		require('./rules/node'),
		require('./rules/stylisticIssues'),
		require('./rules/es6'),
		require('./rules/react'),
		require('./rules/jsx'),
		require('./rules/standard')
	),
}
