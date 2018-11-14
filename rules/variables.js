module.exports = {
	'init-declarations': ['warn', 'always'],
	'no-delete-var': 'warn',
	'no-label-var': 'warn',
	'no-restricted-globals': ['warn', 'event'],
	'no-shadow-restricted-names': 'warn',
	'no-undef': 'error',
	'no-undef-init': 'warn',
	'no-undefined': 'warn',
	'no-unused-vars': ['warn', {
		args: 'all',
		argsIgnorePattern: '^_',
	}],
	'no-use-before-define': ['warn', 'nofunc'],
}
