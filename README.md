# Codemotion ESLint Configuration

## Installation

```sh
yarn add --dev eslint eslint-config-codemotion
```

## Usage
Specify `codemotion` in the [`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).
```json
{
	"eslintConfig": {
		"extends": "codemotion"
	}
}
```

---

If your target environment is running Node.js 7 or below add `codemotion/extra/oldNode` to your configuration (or `codemotion/extra/error/oldNode` for errors)
```json
{
	"eslintConfig": {
		"extends": [
			"codemotion",
			"codemotion/extra/oldNode"
		]
	}
}
```
