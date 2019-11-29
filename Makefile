install:
	@rm -rf ./node_modules
	npm install

lint:
	node_modules/.bin/eslint --fix index.js streamHelpers/ helper/