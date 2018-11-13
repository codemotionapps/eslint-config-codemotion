module.exports = function (config) {
	const { rules } = config

	for (const i in rules) {
		const rule = rules[i]
		if (Array.isArray(rule)) {
			rule[0] !== 'off' && (rule[0] = 'error')
		} else if (typeof rule === 'string') {
			rule !== 'off' && (rules[i] = 'error')
		} else {
			rule !== 0 && (rules[i] = 2)
		}
	}

	return config
}
