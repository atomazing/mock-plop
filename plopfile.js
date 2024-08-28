const path = require('path');

// Assuming your plopfile.js is at the root of your project
const projectBaseDir = process.cwd();

module.exports = function (plop) {
	plop.setGenerator('init mock packages', {
		description: 'generates an packages for mocking',
		prompts: [],
		actions: [
			{
				type: 'add',
				skipIfExists: true,
				// Dynamically construct the path using path.join
				path: path.join(projectBaseDir, 'src/mocks/browser.ts'),
				templateFile: 'src/templates/init/browser.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				// Dynamically construct the path using path.join
				path: path.join(projectBaseDir, 'src/mocks/handlers/handlers.ts'),
				templateFile: 'src/templates/init/handlers/handlers.ts',
			},
		],
	})
	plop.setGenerator('init api+store packages', {
		description: 'generates an packages for api and store',
		prompts: [],
		actions: [
			{
				type: 'add',
				skipIfExists: true,
				// Dynamically construct the path using path.join
				path: path.join(projectBaseDir, 'src/api/baseApi.ts'),
				templateFile: 'src/templates/api/baseApi.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				// Dynamically construct the path using path.join
				path: path.join(projectBaseDir, 'src/api/rtkQueryHandler.ts'),
				templateFile: 'src/templates/api/rtkQueryHandler.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				// Dynamically construct the path using path.join
				path: path.join(projectBaseDir, 'src/store/store.ts'),
				templateFile: 'src/templates/store/store.ts',
			},
		],
	})
	plop.setGenerator('api + mock', {
		description: 'generates an api and mock',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'entity name (for example "User"):',
				validate(value) {
					return /.+/.test(value) ? true : 'name is required'
				},
			},
			{
				type: 'input',
				name: 'url',
				message: 'controller url please (for example "/users"):',
				validate(value) {
					return /.+/.test(value) ? true : 'url is required'
				},
			},
		],
		actions: [
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/api/{{camelCase name}}/{{camelCase name}}Api.ts'),
				templateFile: 'src/templates/api/api.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/api/{{camelCase name}}/index.ts'),
				templateFile: 'src/templates/api/index.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/models/{{properCase name}}.ts'),
				templateFile: 'src/templates/models/model.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				path: 'src/models/index.ts',
				templateFile: 'src/templates/models/index.ts',
			},
			{
				type: 'modify',
				path: path.join(projectBaseDir, 'src/models/index.ts'),
				pattern: /(\/\/ MODEL EXPORTS)/g,
				template: "$1\nexport type { {{properCase name}} } from './{{properCase name}}'",
			},
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/mocks/handlers/mock{{properCase name}}/index.ts'),
				templateFile: 'src/templates/mocks/index.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/mocks/handlers/mock{{properCase name}}/mock.ts'),
				templateFile: 'src/templates/mocks/mock.ts',
			},
			{
				type: 'add',
				skipIfExists: true,
				path: path.join(projectBaseDir, 'src/mocks/handlers/mock{{properCase name}}/mockData.ts'),
				templateFile: 'src/templates/mocks/mockData.ts',
			},
			{
				type: 'modify',
				path: path.join(projectBaseDir, 'src/mocks/handlers/handlers.ts'),
				pattern: /(\/\/ MOCK IMPORTS)/g,
				template: "$1\nimport { mock{{properCase name}} } from './mock{{properCase name}}'",
			},
			{
				type: 'modify',
				path: path.join(projectBaseDir, 'src/mocks/handlers/handlers.ts'),
				pattern: /(\/\/ MOCK EXPORTS)/g,
				template: '$1\n\t...mock{{properCase name}},',
			},
		],
	})
}
