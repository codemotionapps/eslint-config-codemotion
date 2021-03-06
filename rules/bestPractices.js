module.exports = {
	'array-callback-return': 'warn',
	'block-scoped-var': 'warn',
	'class-methods-use-this': ['warn', { exceptMethods: ['render'] }],
	complexity: 'warn',
	'consistent-return': 'warn',
	curly: ['warn', 'multi-line'],
	'default-case': 'warn',
	'dot-location': ['warn', 'property'],
	'dot-notation': 'warn',
	eqeqeq: ['warn', 'always', { null: 'ignore' }],
	'max-classes-per-file': 'warn',
	'no-alert': 'warn',
	'no-caller': 'warn',
	'no-case-declarations': 'warn',
	'no-div-regex': 'warn',
	'no-else-return': 'warn',
	'no-empty-function': 'warn',
	'no-empty-pattern': 'warn',
	'no-eval': 'warn',
	'no-extra-bind': 'warn',
	'no-extra-label': 'warn',
	'no-fallthrough': 'warn',
	'no-floating-decimal': 'warn',
	'no-global-assign': 'warn',
	'no-implicit-coercion': 'warn',
	'no-implied-eval': 'warn',
	'no-invalid-this': 'warn',
	'no-iterator': 'warn',
	'no-labels': 'warn',
	'no-lone-blocks': 'warn',
	'no-loop-func': 'warn',
	'no-magic-numbers': ['warn', {
		ignore: [
			0,
			1,
		],
	}],
	'no-multi-spaces': 'warn',
	'no-multi-str': 'warn',
	'no-new': 'warn',
	'no-new-func': 'warn',
	'no-new-wrappers': 'warn',
	'no-octal': 'warn',
	'no-octal-escape': 'warn',
	'no-param-reassign': 'warn',
	'no-proto': 'warn',
	'no-redeclare': 'warn',
	'no-return-assign': 'warn',
	'no-return-await': 'warn',
	'no-script-url': 'warn',
	'no-self-assign': 'warn',
	'no-self-compare': 'warn',
	'no-throw-literal': 'warn',
	'no-unmodified-loop-condition': 'warn',
	'no-unused-expressions': ['warn', { allowShortCircuit: true }],
	'no-unused-labels': 'warn',
	'no-useless-call': 'warn',
	'no-useless-concat': 'warn',
	'no-useless-escape': 'warn',
	'no-useless-return': 'warn',
	'no-void': 'off',
	'no-with': 'warn',
	'prefer-promise-reject-errors': 'warn',
	radix: 'warn',
	'require-await': 'warn',
	'require-unicode-regexp': 'warn',
	'wrap-iife': 'warn',
	yoda: 'warn',
}
