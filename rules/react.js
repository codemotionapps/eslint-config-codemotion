module.exports = {
	'react/boolean-prop-naming': 'warn',
	'react/button-has-type': 'warn',
	'react/default-props-match-prop-types': 'warn',
	'react/destructuring-assignment': 'warn',
	'react/display-name': 'off', // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Inferred_function_names
	'react/forbid-prop-types': 'warn',
	'react/forbid-foreign-prop-types': 'warn',
	'react/no-access-state-in-setstate': 'warn',
	'react/no-array-index-key': 'warn',
	'react/no-children-prop': 'warn',
	'react/no-danger-with-children': 'warn',
	'react/no-deprecated': 'warn',
	'react/no-did-mount-set-state': 'warn',
	'react/no-did-update-set-state': 'warn',
	'react/no-direct-mutation-state': 'warn',
	'react/no-find-dom-node': 'warn',
	'react/no-is-mounted': 'warn',
	'react/no-multi-comp': 'warn',
	'react/no-redundant-should-component-update': 'warn',
	'react/no-render-return-value': 'warn',
	'react/no-set-state': 'off',
	'react/no-typos': 'warn',
	'react/no-string-refs': 'warn',
	'react/no-this-in-sfc': 'warn',
	'react/no-unescaped-entities': 'warn',
	'react/no-unknown-property': ['warn', { ignore: ['class'] }],
	'react/no-unsafe': 'off',
	'react/no-unused-prop-types': 'warn',
	'react/no-unused-state': 'warn',
	'react/no-will-update-set-state': 'warn',
	'react/prefer-es6-class': 'warn',
	'react/prefer-stateless-function': 'warn',
	'react/prop-types': 'warn',
	'react/react-in-jsx-scope': 'warn',
	'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],
	'react/require-optimization': 'off',
	'react/require-render-return': 'warn',
	'react/self-closing-comp': 'warn',
	'react/sort-comp': 'warn',
	'react/sort-prop-types': ['warn', {
		callbacksLast: true,
		ignoreCase: false,
		requiredFirst: true,
		sortShapeProp: true,
		noSortAlphabetically: true,
	}],
	'react/style-prop-object': 'warn',
	'react/void-dom-elements-no-children': 'warn',
}
