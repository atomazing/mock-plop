# What is @atomazing-org/mock-plop?
The `@atomazing-org/mock-plop` library is a configuration script designed for Plop, a tool aimed at automating code generation within projects utilizing templates. Specifically, this script focuses on generating and updating files associated with mocks (placeholders) and API models within a project.

# Purpose:
1. Automate creation and updating of files related to mocks and API models
2. Simplify project setup for working with mock data and API stubs
3. Integrate with popular tools and libraries such as Redux Toolkit, React Redux, and MSW (Mock Service Worker)

# Key features:
## Code Generation
1. Automatic creation of files for mocks and API models
2. Project structure configuration for effective work with mock data

## Integration with Redux Tool Kit
1. Creation of Redux TK createApi for managing requests

## Working with MSW
1. Configuration of API stubs for local testing
2. Creating network request simulations without requiring a server-side component

# Steps for new Project Setup
Create a new project using Vite:
## Step 1: execute 
```npm
npm create vite@latest
```
## Step 2: Add a TypeScript configuration file (tsconfig.json) with aliases at the root of the project.
It is necessary to add the aliases settings
```json
{
	"include": ["./src/**/*"],
	"exclude": ["node_modules", "public/mockServiceWorker.js"],
	"compilerOptions": {
		"baseUrl": "src",
                ...
		"paths": {
			"@*": ["*"]
		}
	}
}

```
## Step 3: Configure Vite to use paths from tsconfig.json:
It is necessary to add the aliases settings
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(),],
})


```
## Step 4: Install the vite-tsconfig-paths package
```npm
npx msw init ./public
```
## Step 5: Add the plugin to the Vite configuration (vite.config.ts):
```javascript
import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tsconfigPaths from 'vite-tsconfig-paths'
  
  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
  })
```
## Step 6: Set up mock APIs:
Add the following code at the beginning of the main.tsx file or equivalent entry file:
```javascript
if (import.meta.env.VITE_API === 'mock') {
  const { worker, onUnhandledRequest } = await import('./mocks/browser')
  await worker.start({ onUnhandledRequest })
}
```
## Step 7: Install necessary dependencies:
```npm
npm install @reduxjs/toolkit react-redux
```
```npm
npm install plop msw vite-tsconfig-paths cross-env --save-dev
```
## Step 8: Add a script to run development with mocks in package.json:
```json
{
  "scripts": {
    "dev:mock": "cross-env VITE_API=mock vite"
  }
}
```
## Step 9: Initialize MSW (Mock Service Worker):
```npm
npx msw init ./public
```
# Generation
## Generation of Mock Packages

- The script outlines the creation of two files within the `src/mocks` directory:
    - `browser.ts`: Mimics browser behavior.
    - `handlers/handlers.ts`: Manages request handlers.
- File paths are dynamically determined relative to the project's root directory (`projectBaseDir`).

## Generation of API and Mock

- For every new API model introduced via the command-line interface, the script generates a suite of files across several directories:
    - `src/api`: Defines the API.
    - `src/models`: Contains the data model.
    - `src/mocks/handlers/mockName`: Includes mock data and handlers for testing purposes.
- It also modifies existing files, such as adding imports and exports to `src/models/index.ts` and `src/store/store.ts`.

This script significantly streamlines the process of establishing new API models alongside their mock implementations, thereby automating the repetitive aspects of code generation and its subsequent updates.

# Installation for existing project

## Step 1: Install the Package

First, incorporate the package into your project by executing the following command in your project's terminal: `npm install @atomazing-org/mock-plop --save-dev`
This action designates `@atomazing-org/mock-plop` as a development dependency within your project.

## Step 2: Initialize File Structure

After installation, initiate your project's file structure conventionally with:
`npx my-template`
Choose the option "init mock packages" from the presented menu. This action establishes a foundational structure for managing mock files.

## Step 3: Set Up Dynamic Imports for Models

- Within `models/index.ts`, insert the comment `// MODEL EXPORTS`. This serves as a cue to include an import statement for the integration model from the models directory.

       // MODEL EXPORTS
       export type { Login } from './Login' // insert "MODEL EXPORTS" at the very top
       export type { Post } from './Post' // Any random import

## Step 4: Utilize the Template

Upon completion of the preceding steps, leverage the template to generate API and mock code by executing:
`npx my-template`
Then, select the command `api + mock`. This command automatically generates the requisite files and structures for your project, adhering to the configurations you've set forth.

