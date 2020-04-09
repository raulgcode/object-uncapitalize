
# object-uncapitalize

A quite simple Node.js library to uncapitalize plain or complex objects and arrays

## Installation
`$ npm install object-uncapitalize`

## Usage
```js
	const uncapitalizer = require('object-uncapitalize');
	const objectWithCapitalKeys = {
		CapitalKey: "test",
		ComplexObjectCapitalKey: {
			CapitalKey: "test"
		}
		ArrayWithCapital: [{CapitalKey:"test"}]
	};
	const objectUncapitalized = uncapitalizer(objectWithCapitalKeys);
	console.log(objectUncapitalized);
	/* Then you will get:
	{
		 capitalKey: "test",
		 complexObjectCapitalKey: {
			 capitalKey: "test"
		 }
		 arrayWithCapital: [{capitalKey:"test"}]
	}
	*/
```