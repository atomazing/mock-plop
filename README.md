# What is @atomazing-org/mock-plop?

The `@atomazing-org/mock-plop` library is a configuration script designed for Plop, a tool aimed at automating code generation within projects utilizing templates. Specifically, this script focuses on generating and updating files associated with mocks (placeholders) and API models within a project.

## Main Functions

### Generation of Mock Packages

- The script outlines the creation of two files within the `src/mocks` directory:
    - `browser.ts`: Mimics browser behavior.
    - `handlers/handlers.ts`: Manages request handlers.
- File paths are dynamically determined relative to the project's root directory (`projectBaseDir`).

### Generation of API and Mock

- For every new API model introduced via the command-line interface, the script generates a suite of files across several directories:
    - `src/api`: Defines the API.
    - `src/models`: Contains the data model.
    - `src/mocks/handlers/mock{properCase name}`: Includes mock data and handlers for testing purposes.
- It also modifies existing files, such as adding imports and exports to `src/models/index.ts` and `src/store/store.ts`.

This script significantly streamlines the process of establishing new API models alongside their mock implementations, thereby automating the repetitive aspects of code generation and its subsequent updates.

## Installation and Running @atomazing-org/mock-plop

### Step 1: Install the Package

First, incorporate the package into your project by executing the following command in your project's terminal: `npm install @atomazing-org/mock-plop --save-dev`
This action designates `@atomazing-org/mock-plop` as a development dependency within your project.

### Step 2: Initialize File Structure

After installation, initiate your project's file structure conventionally with:
`npx my-template`
Choose the option "init mock packages" from the presented menu. This action establishes a foundational structure for managing mock files.

### Step 3: Set Up Dynamic Imports for Models

- Within `models/index.ts`, insert the comment `// MODEL EXPORTS`. This serves as a cue to include an import statement for the integration model from the models directory.

       // MODEL EXPORTS
       export type { Login } from './Login' // Вставить "MODEL EXPORTS" можно в самый верх
       export type { Post } from './Post' // Любой рандомный импорт


- In the store (for `store/store.ts`), introduce two comments:
    - `// IMPORT API`: Indicates the necessity of including an import statement for the `createApi` function from the api directory.
    - `// INSERT API`: Specifies the insertion point for the `createApi` object derived from the api directory.


       // IMPORT API
       import { jsonPlaceholderApi } from '@store/api/posts' // Input "MODEL EXPORTS" in top of file
       
       const apis = [
           // INSERT API
           jsonPlaceholderApi
       ]


### Step 4: Utilize the Template

Upon completion of the preceding steps, leverage the template to generate API and mock code by executing:
`npx my-template`
Then, select the command `api + mock`. This command automatically generates the requisite files and structures for your project, adhering to the configurations you've set forth.

